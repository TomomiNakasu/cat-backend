import { NextResponse } from "next/server";



const GetHandler = async() => {
    const data = [
      {
        cat_id: 1,
        cat_name: "JIJI",
      },
      {
        cat_id: 2,
        cat_name: "ChaChaMaru",
      },
    ];
    return NextResponse.json(data);
}

export default GetHandler;