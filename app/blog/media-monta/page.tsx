'use client';

export default function MediaMontaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-14">
        <header className="space-y-6">
          <h1 className="text-5xl font-black leading-tight">
            O que é Média Monta Veicular
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            A classificação de média monta ocorre quando o veículo sofre danos
            estruturais recuperáveis conforme a Resolução CONTRAN 810/2020. Neste
            artigo, você entende como identificar o caso, quais etapas são
            necessárias e por que a regularização técnica é essencial.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Quando o veículo é considerado média monta</h2>
          <p className="text-gray-300 leading-relaxed">
            O termo média monta se aplica a veículos que sofreram avarias em
            componentes estruturais, mas ainda podem ser restaurados a partir de
            inspeção técnica e reparos especializados. Isso inclui âncoras de
            motor, longarinas, chaparias e subchassis danificados.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Principais etapas do processo</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Inspeção inicial para definir se o dano é recuperável e se há risco estrutural.
            </li>
            <li>
              Elaboração de laudo técnico por engenheiro especializado.
            </li>
            <li>
              Reparos com peças de qualidade e processos técnicos documentados.
            </li>
            <li>
              Liberação e regularização junto aos órgãos de trânsito.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Por que a regularização é importante</h2>
          <p className="text-gray-300 leading-relaxed">
            Circular sem a devida regularização pode trazer multas, apreensão do
            veículo e problemas no seguro. A regularização garante que o veículo
            seja considerado legalmente apto para rodar após os reparos.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Além disso, a avaliação técnica protege o proprietário contra falhas
            estruturais que poderiam comprometer a segurança de ocupantes e terceiros.
          </p>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">Dica técnica</h3>
          <p className="text-gray-300 leading-relaxed">
            Procure um engenheiro automotivo habilitado e com experiência em laudos
            de média monta. Um laudo claro e preciso facilita a aprovação nos órgãos
            e reduz retrabalho.
          </p>
        </section>
      </div>
    </main>
  );
}
