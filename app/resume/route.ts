import { NextResponse } from "next/server"
import { readFile } from "fs/promises"
import { join } from "path"

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "christian-mbaba-resume.pdf")
    const fileBuffer = await readFile(filePath)

    const headers = new Headers()
    headers.set("Content-Type", "application/pdf")
    headers.set("Content-Disposition", 'attachment; filename="Christian_Mbaba_Resume.pdf"')

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error serving resume:", error)
    return NextResponse.json({ error: "Failed to serve resume" }, { status: 500 })
  }
}
