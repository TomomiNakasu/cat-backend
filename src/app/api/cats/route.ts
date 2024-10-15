import { NextRequest } from "next/server";

import GetHandler from './Get';

export async function GET() {
    return GetHandler();
}

