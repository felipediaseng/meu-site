import Image from 'next/image'
import Link from 'next/link'

export default function SiteEngenharia() {
  const posts = [
    {
      titulo: 'Veículo Média Monta',
      descricao:
        'Entenda as regras para regularização e circulação de veículos classificados como média monta.',
      slug: 'media-monta',
      href: 'https://www.youtube.com/watch?v=xldI6Ml02HE&t=351s',
    },
    {
      titulo: 'Como Funciona a Reclassificação de Monta',
      descricao:
        'Veja como funciona o processo técnico e documental para regularizar veículos sinistrados.',
      slug: 'reclassificacao',
      href: 'https://www.youtube.com/watch?v=7yYQQeWZPnY',
    },
    {
      titulo: 'Quando é Necessário um Laudo Técnico?',
      descricao:
        'Descubra em quais situações um laudo técnico automotivo é exigido.',
      slug: 'laudo-tecnico',
      href: '/videos/video-laudo-tecnico-1.mp4',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-dias-engenheiro.png"
              alt="Dias Engenheiro"
              width={130}
              height={130}
              className="object-contain"
            />

            <div>
              <h1 className="font-bold text-lg leading-none">
                Dias Engenheiro
              </h1>
              <p className="text-sm text-gray-400">
                Engenharia Mecânica Especializada
              </p>
              <p className="text-sm text-blue-400 font-medium mt-1">
                CREA/SC 209059-5
              </p>
            </div>

          </div>

          <nav className="hidden md:flex gap-10 text-lg font-medium text-gray-200">
            <a href="#sobre" className="hover:text-white transition">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#blog" className="hover:text-white transition">
              Blog
            </a>
            <a href="#contato" className="hover:text-white transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />

        <div className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl top-0 right-0" />
        <div className="absolute w-72 h-72 bg-white/5 rounded-full blur-3xl bottom-0 left-0" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
              Engenharia Mecânica Especializada
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Regularização e Laudos Técnicos Veiculares
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Atendimento técnico especializado em veículos sinistrados, reclassificação de monta, laudos automotivos e responsabilidade técnica para empresas nas regiões de São José, Florianópolis, Palhoça, Biguaçu, Balneário Camboriú, Itapema, Itajaí e cidades próximas.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5548991916097"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition shadow-2xl"
              >
                Solicitar Orçamento
              </a>

              <a
                href="#servicos"
                className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
              >
                Conhecer Serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-3xl font-black">+500</h3>
                <p className="text-gray-400 text-sm">Atendimentos</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">100%</h3>
                <p className="text-gray-400 text-sm">Suporte Técnico</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">SC</h3>
                <p className="text-gray-400 text-sm">Atuação Regional</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">
                Serviços Especializados
              </h3>

              <div className="space-y-5">
                {[
                  'Reclassificação de Monta',
                  'Laudos Técnicos Veiculares',
                  'Perícia Técnica Automotiva',
                  'Responsabilidade Técnica',
                  'Consultoria Técnica',
                  'Avaliação Estrutural',
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-white/30 transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8">
              Engenharia com foco técnico e segurança
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-4xl">
  Engenheiro Mecânico pós graduado em Engenharia de Segurança do Trabalho com atuação especializada na área automotiva, oferecendo serviços técnicos voltados à regularização veicular, elaboração de laudos técnicos e reclassificação de monta. Atua com responsabilidade profissional e comprometimento na entrega de soluções seguras, precisas e confiáveis para proprietários de veículos, empresas, seguradoras, despachantes e demais demandas do setor automotivo.

</p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Soluções técnicas alinhadas às exigências do DETRAN e normas
              aplicáveis ao setor automotivo.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/avatar.png"
              alt="Engenheiro Mecânico"
              className="w-[420px] h-[420px] object-cover rounded-[32px] border border-blue-500/20 shadow-[0_0_40px_rgba(0,80,255,0.2)]"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              Serviços
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Atendimento técnico especializado para veículos, empresas e
              regularizações junto aos órgãos competentes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                titulo: 'Reclassificação de Monta',
                descricao:
                  'Regularização e emissão de documentação técnica para veículos sinistrados.',
              },
              {
                titulo: 'Laudos Técnicos',
                descricao:
                  'Análises técnicas completas com emissão de laudos especializados.',
              },
              {
                titulo: 'Responsável Técnico',
                descricao:
                  'Atuação técnica para empresas e operações do setor mecânico.',
              },
            ].map((servico) => (
              <div
                key={servico.titulo}
                className="bg-[#111111] border border-white/10 rounded-[32px] p-10 hover:-translate-y-2 transition duration-300 shadow-2xl"
              >
                <h3 className="text-3xl font-bold mb-6">
                  {servico.titulo}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {servico.descricao}
                </p>

                <a
                  href="https://wa.me/5548991916097"
                  className="inline-block bg-white text-black px-6 py-3 rounded-2xl font-semibold"
                >
                  Solicitar Atendimento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="contato" className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8">
              Solicite um orçamento
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Envie seus dados e informações do veículo para receber um retorno
              rapidamente.
            </p>
          </div>

          <form className="bg-black border border-white/10 rounded-[32px] p-10 space-y-6 shadow-2xl">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="WhatsApp"
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Descreva o veículo ou serviço necessário"
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-14">
            <div>
              <h2 className="text-5xl font-black mb-4">
                Blog Técnico
              </h2>

              <p className="text-gray-400 text-lg">
                Conteúdos sobre veículos sinistrados e engenharia automotiva.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.titulo}
                className="bg-[#111111] border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 transition flex flex-col h-full"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={
                      post.titulo === "Veículo Média Monta"
                        ? "/media-monta.png"
                        : post.titulo === "Como Funciona a Reclassificação de Monta"
                        ? "/reclassificacao.png"
                        : "/laudo-tecnico.png"
                    }
                    alt={post.titulo}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {post.titulo}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {post.descricao}
                    </p>
                  </div>

                  {post.href ? (
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-3 rounded-2xl font-semibold"
                    >
                      <span aria-hidden="true" className="text-lg">▶</span>
                      Assista
                    </a>
                  ) : (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center bg-white text-black px-5 py-3 rounded-2xl font-semibold"
                    >
                      Ler Mais
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-6">
            Instagram
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Compartilhe conteúdos técnicos, resultados e informações para gerar
            autoridade e atrair clientes.
          </p>

          <a
            href="https://instagram.com/felipediaseng2407"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-bold"
          >
            Acessar Instagram
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-white to-gray-300 text-black text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-8">
            Precisa regularizar um veículo?
          </h2>

          <p className="text-xl mb-10">
            Atendimento técnico rápido e especializado para veículos sinistrados.
          </p>

          <a
            href="https://wa.me/5548991916097"
            className="inline-block bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5548991916097"
        className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-10 px-6 text-center text-gray-500">
        <div className="space-y-2">
          <p>
            © 2026 Dias Engenheiro — Todos os direitos reservados.
          </p>

          <p>
            WhatsApp: (48) 99191-6097
          </p>

          <p>
            Instagram: @felipediaseng2407
          </p>

          <p>
            E-mail: felipediaseng@hotmail.com
          </p>

          <p>
            Endereço: São José - Barreiros
          </p>

          <p>
            Atendimento em São José, Florianópolis, Palhoça, Biguaçu,
            Balneário Camboriú, Itapema, Itajaí e Região.
          </p>
        </div>
      </footer>
    </div>
  )
}
