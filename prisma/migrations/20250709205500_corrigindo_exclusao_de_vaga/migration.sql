-- DropForeignKey
ALTER TABLE "Inscricao" DROP CONSTRAINT "Inscricao_vagaId_fkey";

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
