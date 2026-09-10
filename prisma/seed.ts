import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { initialProjects } from '../src/lib/initial-projects';

async function main() {
  const connectionString = process.env.DATABASE_URL ?? '';
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });

  for (const project of initialProjects) {
    const data = {
      title: project.title,
      slug: project.slug,
      description: project.description,
      techStack: project.techStack,
      imageUrl: project.imageUrl,
      liveUrl: project.liveUrl ?? null,
      githubUrl: project.githubUrl ?? null,
      featured: project.featured,
      status: project.status,
      order: project.order,
      createdAt: new Date(project.createdAt),
      updatedAt: new Date(project.updatedAt),
    };

    await prisma.project.upsert({
      where: { id: project.id },
      update: data,
      create: { id: project.id, ...data },
    });
  }

  const count = await prisma.project.count();
  console.log(`Seeded project catalog: ${count} records total.`);
  await prisma.$disconnect();
}

main().catch(async (err) => {
  console.error(err);
  process.exit(1);
});