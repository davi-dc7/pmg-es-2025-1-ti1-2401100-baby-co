document.addEventListener('DOMContentLoaded', () => {
  const data = {
    logo: 'logo.jpg',
    menu: ['Bebês', 'Nutrição', 'Blogs', 'Lembretes'],
    banner: {
      titulo: 'BabyConnect: Conectando você ao cuidado, do primeiro choro ao primeiro passo!',
      botaoTexto: 'Saiba Mais',
      imagem: 'banner.png'
    },
    servicos: [
      {
        titulo: 'Sono',
        descricao: 'Acompanhe os horários e duração do sono. Descubra padrões e melhore a rotina do seu bebê com análises personalizadas.'
      },
      {
        titulo: 'Alimentação',
        descricao: 'Registre amamentações, fórmulas e introdução alimentar. Visualize históricos, padrões e gere relatórios para consultas médicas.'
      },
      {
        titulo: 'Compartilhamento',
        descricao: 'Compartilhe informações com outros cuidadores, babás ou familiares para manter todos informados.'
      },
      {
        titulo: 'Lembretes',
        descricao: 'Configure alertas para medicações, consultas médicas e outras atividades importantes para o seu bebê.'
      }
    ],
    depoimentos: [
      {
        texto: 'O Baby Connect mudou minha vida como mãe de primeira viagem. Consigo acompanhar todas as atividades do meu bebê e ainda compartilhar com meu marido e a babá.',
        imagem: 'usuario1.png'
      },
      {
        texto: 'Como mãe solo, este app me ajuda a manter a sanidade. Posso ver padrões de sono, alimentação e planejar melhor meu dia com meu bebê.',
        imagem: 'usuario2.png'
      }
    ],
    galeria: ['../img/familia_praia.png', '../img/crianca_brincando.png', '../img/familia_em_casa.png', '../img/cidade_passeio.png']
  };

  // Menu
  const menuList = document.getElementById('menu-list');
  data.menu.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item;
    a.href = '#';
    li.appendChild(a);
    menuList.appendChild(li);
  });

  // Banner
  document.getElementById('banner-title').textContent = data.banner.titulo;
  const btn = document.getElementById('banner-button');
  btn.textContent = data.banner.botaoTexto;
  document.getElementById('banner-img').src = `../img/${data.banner.imagem}`;
  btn.addEventListener('click', () => {
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
  });

  // Serviços
  const servicesContainer = document.getElementById('services-container');
  data.servicos.forEach(svc => {
    const div = document.createElement('div');
    div.classList.add('service-item');
    div.innerHTML = `<h3>${svc.titulo}</h3><p>${svc.descricao}</p>`;
    servicesContainer.appendChild(div);
  });

  // Depoimentos
  const testContainer = document.getElementById('testimonials-container');
  data.depoimentos.forEach(dep => {
    const div = document.createElement('div');
    div.classList.add('testimonial');
    div.innerHTML = `<p>"${dep.texto}"</p><img src="../img/${dep.imagem}" alt="Usuário">`;
    testContainer.appendChild(div);
  });

  // Galeria
  const gallery = document.getElementById('gallery-container');
  data.galeria.forEach(img => {
    const el = document.createElement('img');
    el.src = `../img/${img}`;
    el.alt = 'Galeria';
    gallery.appendChild(el);
  });
});