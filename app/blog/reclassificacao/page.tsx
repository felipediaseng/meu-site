'use client';

export default function ReclassificacaoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-14">
        <header className="space-y-6">
          <h1 className="text-5xl font-black leading-tight">
            Como Funciona a Reclassificação de Monta
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            A reclassificação de monta é o processo técnico e documental que atualiza
            a situação de veículos sinistrados junto aos órgãos de trânsito. Aqui
            você descobre o passo a passo e as informações mais importantes para fazer
            esse procedimento corretamente.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">O que é reclassificação</h2>
          <p className="text-gray-300 leading-relaxed">
            A reclassificação ocorre quando um veículo sinistrado é restaurado e
            precisa ter sua categoria ou condição atualizada nos sistemas de trânsito.
            Isso garante que o veículo esteja regularizado e possa circular novamente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Etapas do processo</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Vistoria técnica para avaliar o dano e definir a viabilidade de regularização.</li>
            <li>Emissão do laudo técnico e da documentação necessária.</li>
            <li>Atualização da classificação do veículo junto aos órgãos competentes.</li>
            <li>Inspeção e confirmação final para liberação de circulação.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Quem deve fazer a reclassificação</h2>
          <p className="text-gray-300 leading-relaxed">
            Toda pessoa ou empresa que adquiriu ou restaurou um veículo sinistrado deve
            providenciar a reclassificação. O procedimento é fundamental para legalizar
            a circulação e permitir transferências ou vendas futuras.
          </p>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-bold">Recomendação prática</h3>
          <p className="text-gray-300 leading-relaxed">
            Trabalhe com profissionais qualificados e com experiência em documentação veicular.
            Isso reduz o tempo de aprovação e evita recusas nos órgãos de trânsito.
          </p>
        </section>
      </div>
    </main>
  );
}
