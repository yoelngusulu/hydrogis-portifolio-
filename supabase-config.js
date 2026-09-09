window.HYDROGIS_SUPABASE_CONFIG = {
  url: '',
  anonKey: ''
};

(() => {
  function simplifyPortfolio() {
    document.querySelectorAll('a[href="#data-hub"]').forEach(link => {
      if (link.classList.contains('visual-card')) {
        link.setAttribute('href', '#portfolio');
        return;
      }

      if (link.classList.contains('btn')) {
        link.setAttribute('href', '#portfolio');
        link.textContent = 'Explore Projects ->';
        return;
      }

      const parent = link.parentElement;
      if (parent?.classList.contains('footer-section')) {
        link.textContent = 'Project Portfolio';
        link.setAttribute('href', '#portfolio');
        return;
      }

      link.remove();
    });

    const dataHub = document.getElementById('data-hub');
    if (dataHub) {
      dataHub.remove();
    }

    document.getElementById('authModal')?.remove();
    document.getElementById('authActions')?.remove();
    document.getElementById('authUser')?.remove();

    document.querySelectorAll('.download-trigger').forEach(button => {
      button.remove();
    });
  }

  function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  }

  function setHtml(selector, html) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = html;
  }

  function updatePortfolioFromCv() {
    setText('.grid-hero .eyebrow', 'Hydrology | GIS | Remote Sensing');
    setText('.grid-hero .lead', 'Hydrology and Meteorological Technician with over five years of professional experience in hydrological and water resources studies. Skilled in GIS, remote sensing, watershed analysis, hydrological modelling, flood and drought assessment, topo-bathymetric surveys, hydrometric data collection, and rainfall analysis.');

    setText('.grid-hero .mini-panel:nth-child(1) h3', 'Hydrology & Water Resources');
    setText('.grid-hero .mini-panel:nth-child(1) p', 'Hydrological and hydrogeological studies, rainfall analysis, flood and drought assessment, hydrological design, and water resources consultancy support.');
    setText('.grid-hero .mini-panel:nth-child(2) h3', 'GIS, Surveys & Modelling');
    setText('.grid-hero .mini-panel:nth-child(2) p', 'GIS and remote sensing analysis, watershed delineation, terrain analysis, HEC-HMS, HEC-RAS, ArcGIS Pro, ArcMap, and Python-based hydro-meteorological workflows.');

    setText('#about h2', 'Hydrology & GIS Technician with Field, Modelling and Water Resources Experience');
    const aboutParagraphs = document.querySelectorAll('#about .muted');
    if (aboutParagraphs[0]) {
      aboutParagraphs[0].textContent = 'I am a Hydrology and GIS Technician based in Tanzania, working across hydrological studies, hydrogeological assessments, spatial analysis, and field-based water resources data collection. My work combines practical survey experience with GIS, remote sensing, and hydrological modelling tools.';
    }
    if (aboutParagraphs[1]) {
      aboutParagraphs[1].textContent = 'My professional experience includes projects for refugee settlements, mining areas, sugarcane developments, gas exploration, road rehabilitation, and water resources planning across Tanzania. I focus on producing reliable maps, analysis outputs, and technical inputs that support planning and environmental decision-making.';
    }

    const skills = [
      'ArcMap, ArcGIS Pro & QGIS',
      'HEC-HMS & HEC-RAS Modelling',
      'Watershed Delineation & Terrain Analysis',
      'Hydrometric Data Measurements',
      'Topographic & Bathymetric Surveys',
      'Python for Hydro-meteorological Analysis',
      'Flood, Drought & Rainfall Analysis',
      'Remote Sensing & Image Processing'
    ];
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
      skillsGrid.innerHTML = skills.map(skill => `<div class="skill">${skill}</div>`).join('');
    }

    const projectCards = document.querySelectorAll('#portfolio .card');
    const projects = [
      {
        title: 'Nyarugusu, Nduta & Mtendeli Hydrological Study',
        text: 'GIS and hydrology technical support for hydrological and soil modelling studies across refugee camp areas in Kigoma Region.'
      },
      {
        title: 'Topographic & Bathymetric Surveys',
        text: 'Field survey support for terrain documentation, elevation profiling, water resources studies, and technical project planning.'
      },
      {
        title: 'Pangani Sugarcane Hydrological Study',
        text: 'Hydrological study support within the Pangani River area, including spatial interpretation and water resources assessment for project planning.'
      },
      {
        title: 'Mining & Exploration Water Studies',
        text: 'Hydrological and hydrogeological study support for mining and exploration projects in Mbeya, Songwe, Mtwara, Tanga, Lindi, and other regions.'
      },
      {
        title: 'Field GIS Data Collection',
        text: 'Settlement-scale and project-site geospatial inventory, boundary mapping, hydrometric measurements, and field documentation.'
      },
      {
        title: 'GIS Hydrology Reports',
        text: 'Technical reporting, spatial analysis summaries, rainfall analysis, hydrological modelling outputs, and cartographic layouts for professional studies.'
      }
    ];

    projectCards.forEach((card, index) => {
      const project = projects[index];
      if (!project) return;
      const title = card.querySelector('h3');
      const text = card.querySelector('.muted');
      if (title) title.textContent = project.title;
      if (text) text.textContent = project.text;
    });

    setText('#contact .center .muted', 'Available for GIS mapping, hydrology studies, hydrometric data collection, rainfall analysis, topographic surveys, bathymetric surveys, and water resources project support.');
    document.querySelectorAll('a[href="mailto:info@example.com"]').forEach(link => {
      link.setAttribute('href', 'mailto:joelngusulu97@gmail.com');
    });
    document.querySelectorAll('a[href="https://linkedin.com"]').forEach(link => {
      link.setAttribute('href', 'https://www.linkedin.com/search/results/all/?keywords=Yoeli%20Ngusulu');
    });

    setText('.footer-tagline', 'Hydrology | GIS | Remote Sensing | Water Resources');
    setHtml('.footer-section:nth-child(1)', '<h3>Services</h3><p><a href="#portfolio">Hydrological Studies</a></p><p><a href="#portfolio">GIS Mapping</a></p><p><a href="#portfolio">Remote Sensing Analysis</a></p><p><a href="#portfolio">Field Surveying</a></p>');
  }

  function refreshPortfolio() {
    simplifyPortfolio();
    updatePortfolioFromCv();
  }

  window.addEventListener('DOMContentLoaded', refreshPortfolio);
  window.addEventListener('load', refreshPortfolio);
  setTimeout(refreshPortfolio, 0);
  setTimeout(refreshPortfolio, 250);
  setTimeout(refreshPortfolio, 1000);
})();
