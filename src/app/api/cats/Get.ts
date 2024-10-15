import { NextRequest, NextResponse } from "next/server";


const GetHandler = async(_req: NextRequest) => {
    const data = {
        message: "Hello from API",
    };
    return NextResponse.json(data);
}

export default GetHandler;