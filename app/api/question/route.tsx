import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"
import { qa } from "@/utils/ai"

export const POST = async(request) => {
    const {question} = await request.json()
    const user = await getUserByClerkID()

    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id,
        },
        select: {
            id: true,
            content: true,
            createdAt: true,
        }
    })

    const answer = await qa(question, entries)

    return NextResponse.json({data : answer})
}