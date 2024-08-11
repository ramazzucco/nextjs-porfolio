import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest) {
    const param = _req.url.split('?')[1];
    const dictionary = await import(`../../../i18n/${param}.json`);
    return NextResponse.json(dictionary, { status: 200 });
}
