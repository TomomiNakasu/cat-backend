import { NextRequest } from "next/server";

import GetHandler from './Get';

export async function GET(req: NextRequest) {
    return GetHandler(req);
}

