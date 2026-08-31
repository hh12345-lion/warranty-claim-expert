import { google, sheets_v4 } from "googleapis";

type CellValue = string | number | boolean | null;

interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

/** Normalise PEM from env — literal \\n, quotes, whitespace. */
export function normalizePrivateKey(raw?: string): string | undefined {
  if (!raw) return undefined;

  let key = raw.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }
  key = key.replace(/\\n/g, "\n");

  if (!key.includes("BEGIN PRIVATE KEY")) {
    console.error(
      "GOOGLE_PRIVATE_KEY is invalid. Paste the full private_key from the service account JSON."
    );
    return undefined;
  }
  return key;
}

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim(),
      private_key: normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY) &&
      process.env.GOOGLE_SHEET_ID?.trim()
  );
}

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId =
    target?.spreadsheetId || process.env.GOOGLE_SHEET_ID?.trim();
  const sheetName =
    target?.sheetName?.trim() ||
    process.env.GOOGLE_SHEET_TAB_NAME?.trim() ||
    "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}
