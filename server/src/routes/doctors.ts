import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function doctorsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async (req) => {
    await req.jwtVerify()
  })

  app.get('/doctors', async (req) => {
    const doctors = await prisma.doctor.findMany({
      where: {
        userId: req.user.sub,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    return doctors.map((doctor) => {
      return {
        id: doctor.id,
        coverUrl: doctor.coverUrl,
        name: doctor.name,
        about: doctor.about,
        email: doctor.email,
        crm: doctor.crm,
        specialization: doctor.specialization,
        createdAt: doctor.createdAt,
      }
    })
  })

  app.get('/doctors/:id', async (req, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const doctor = await prisma.doctor.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (doctor.userId !== req.user.sub) {
      return reply.status(401).send()
    }

    return doctor
  })

  app.post('/doctors', async (req) => {
    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
      about: z.string(),
      crm: z.string(),
      specialization: z.string(),
      coverUrl: z.string(),
    })

    const { name, email, about, crm, specialization, coverUrl } =
      bodySchema.parse(req.body)

    const doctor = await prisma.doctor.create({
      data: {
        name,
        email,
        about,
        crm,
        specialization,
        coverUrl,
        userId: req.user.sub,
      },
    })

    return doctor
  })

  app.put('/doctors/:id', async (req, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
      about: z.string(),
      crm: z.string(),
      specialization: z.string(),
      coverUrl: z.string(),
    })

    const { name, email, about, crm, specialization, coverUrl } =
      bodySchema.parse(req.body)

    let doctor = await prisma.doctor.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (doctor.userId !== req.user.sub) {
      return reply.status(401).send()
    }

    doctor = await prisma.doctor.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        about,
        crm,
        specialization,
        coverUrl,
      },
    })

    return doctor
  })

  app.delete('/doctors/:id', async (req, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(req.params)

    const doctor = await prisma.doctor.findUniqueOrThrow({
      where: {
        id,
      },
    })

    if (doctor.userId !== req.user.sub) {
      return reply.status(401).send()
    }

    await prisma.doctor.delete({
      where: {
        id,
      },
    })
  })
}
