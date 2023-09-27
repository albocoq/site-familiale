import { PrismaClient } from '@prisma/client'

const client = new PrismaClient

export async function getNames() {
    const person = await client.names.findMany()
    return person
}

export async function getGalerie() {
    const galerie = await client.galerie.findMany()
    return galerie
}

export async function getText() {
    const text = await client.text.findMany()
    return text
}
