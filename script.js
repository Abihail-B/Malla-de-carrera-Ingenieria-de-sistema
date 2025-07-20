const materias = {
  //primer semestre
  'UNI102': { nombre: 'Matemáticas I', tipo: 'basica', semestre: 1, requisitos: [] },
  'SIS101': { nombre: 'Introducción a Ingeniería de Sistemas', tipo: 'general', semestre: 1, requisitos: [] },
  'SIS103': { nombre: 'Introducción a la Programación', tipo: 'profesional', semestre: 1, requisitos: [] },
  'UNI104': { nombre: 'Competencias Digitales', tipo: 'general', semestre: 1, requisitos: [] },
  'UNI105': { nombre: 'Redacción Técnica', tipo: 'general', semestre: 1, requisitos: [] },
  'UNI106': { nombre: 'Inglés I', tipo: 'general', semestre: 1, requisitos: [] },
//segundo semestre
  'SIS107': { nombre: 'Estadística Aplicada', tipo: 'basica', semestre: 2, requisitos: ['UNI102'] },
  'UNI108': { nombre: 'Matemáticas II', tipo: 'basica', semestre: 2, requisitos: ['UNI102'] },
  'SIS109': { nombre: 'Programación Estructurada', tipo: 'profesional', semestre: 2, requisitos: ['SIS103'] },
  'SIS110': { nombre: 'Contabilidad Financiera', tipo: 'general', semestre: 2, requisitos: ['UNI104'] },
  'UNI111': { nombre: 'Historia e Identidad Nacional', tipo: 'general', semestre: 2, requisitos: [] },
  'UNI112': { nombre: 'Inglés II', tipo: 'general', semestre: 2, requisitos: ['UNI106'] },
//tercer semestre
  'SIS113': { nombre: 'Análisis de Datos', tipo: 'basica', semestre: 3, requisitos: ['SIS107'] },
  'SIS114': { nombre: 'Matemáticas III', tipo: 'basica', semestre: 3, requisitos: ['UNI108'] },
  'SIS115': { nombre: 'Programación Orientada a Objetos', tipo: 'profesional', semestre: 3, requisitos: ['SIS109'] },
  'SIS116': { nombre: 'Contabilidad de Costos', tipo: 'basica', semestre: 3, requisitos: ['SIS110'] },
  'SIS117': { nombre: 'Base de Datos I', tipo: 'profesional', semestre: 3, requisitos: ['SIS103'] },
  'SIS118': { nombre: 'Inglés III', tipo: 'general', semestre: 3, requisitos: ['UNI112'] },
//cuarto semestre
  'SIS120': { nombre: 'Álgebra Lineal', tipo: 'basica', semestre: 4, requisitos: ['SIS113'] },
  'SIS119': { nombre: 'Física Aplicada I', tipo: 'basica', semestre: 4, requisitos: ['SIS114'] },
  'SIS121': { nombre: 'Programación de Escritorio', tipo: 'profesional', semestre: 4, requisitos: ['SIS115'] },
  'SIS122': { nombre: 'Gestión Financiera Operativa', tipo: 'basica', semestre: 4, requisitos: ['SIS116'] },
  'SIS124': { nombre: 'Fundamentos de Economía', tipo: 'basica', semestre: 4, requisitos: [] },
  'UNI123': { nombre: 'Interculturalidad', tipo: 'general', semestre: 4, requisitos: [] },
//quinto semestre
  'SIS126': { nombre: 'Métodos Numéricos', tipo: 'basica', semestre: 5, requisitos: ['SIS120'] },
  'SIS125': { nombre: 'Física Aplicada II', tipo: 'basica', semestre: 5, requisitos: ['SIS119'] },
  'SIS127': { nombre: 'Desarrollo Web Frontend', tipo: 'profesional', semestre: 5, requisitos: ['SIS121'] },
  'SIS128': { nombre: 'Mercadotecnia', tipo: 'profesional', semestre: 5, requisitos: ['SIS113', 'SIS124'] },
  'SIS130': { nombre: 'Ingeniería Económica', tipo: 'basica', semestre: 5, requisitos: ['SIS122', 'SIS124'] },
  'UNI129': { nombre: 'Sociología y Ética', tipo: 'general', semestre: 5, requisitos: [] },
//sexto semestre
  'SIS131': { nombre: 'Base de Datos II', tipo: 'profesional', semestre: 6, requisitos: ['SIS117'] },
  'SIS132': { nombre: 'Infraestructura Tecnológica I', tipo: 'profesional', semestre: 6, requisitos: ['SIS125'] },
  'SIS133': { nombre: 'Desarrollo Web Backend', tipo: 'profesional', semestre: 6, requisitos: ['SIS127'] },
  'SIS134': { nombre: 'Investigación de Operaciones', tipo: 'basica', semestre: 6, requisitos: ['SIS120'] },
  'SIS136': { nombre: 'Gestión Financiera Estratégica', tipo: 'profesional', semestre: 6, requisitos: ['SIS128', 'SIS130'] },
  'UNI135': { nombre: 'Filosofía de la Ciencia y la Tecnología', tipo: 'general', semestre: 6, requisitos: [] },
//septimo semestre
  'SIS137': { nombre: 'Gestión Organizacional I', tipo: 'profesional', semestre: 7, requisitos: [] },
  'SIS138': { nombre: 'Infraestructura Tecnológica II', tipo: 'profesional', semestre: 7, requisitos: ['SIS132'] },
  'SIS139': { nombre: 'Ingeniería de Software I', tipo: 'profesional', semestre: 7, requisitos: ['SIS133'] },
  'SIS140': { nombre: 'Sistemas Productivos', tipo: 'profesional', semestre: 7, requisitos: ['SIS134'] },
  'SIS141': { nombre: 'Metodologías de Sistemas', tipo: 'profesional', semestre: 7, requisitos: ['SIS101'] },
  'SIS142': { nombre: 'Modelado y Simulación de Sistemas', tipo: 'profesional', semestre: 7, requisitos: ['SIS126'] },
//octavo semestre
  'SIS143': { nombre: 'Gestión Organizacional II', tipo: 'profesional', semestre: 8, requisitos: ['SIS137'] },
  'SIS144': { nombre: 'Inteligencia Artificial I', tipo: 'profesional', semestre: 8, requisitos: ['SIS142'] },
  'SIS147': { nombre: 'Ingeniería de Software II', tipo: 'profesional', semestre: 8, requisitos: ['SIS139'] },
  'SIS148': { nombre: 'Formulación y Evaluación de Proyectos', tipo: 'profesional', semestre: 8, requisitos: ['SIS140', 'SIS141', 'SIS136'] },
  'SIS146': { nombre: 'Metodología de la Investigación', tipo: 'basica', semestre: 8, requisitos: ['SIS141'] },
  'UNI145': { nombre: 'Ambiente y Cambio Climático', tipo: 'general', semestre: 8, requisitos: [] },
//noveno semestre
  'SIS149': { nombre: 'Aplicaciones Móviles Empresariales', tipo: 'profesional', semestre: 9, requisitos: ['SIS133'] },
  'SIS151': { nombre: 'Tecnología e Innovación', tipo: 'profesional', semestre: 9, requisitos: ['SIS147', 'SIS148'] },
  'SIS152': { nombre: 'Taller de Culminación de Estudios', tipo: 'basica', semestre: 9, requisitos: ['SIS146'] },
  'SIS153': { nombre: 'Administración de Proyectos', tipo: 'profesional', semestre: 9, requisitos: ['SIS148'] },
  // Optativas I y II
  'SIS1O1': { nombre: 'Inteligencia Artificial II', tipo: 'profesional', semestre: 9, requisitos: ['SIS138', 'SIS144'] },
  'SIS1O2': { nombre: 'Seguridad de la Información', tipo: 'profesional', semestre: 9, requisitos: ['SIS138', 'SIS144'] },
  'SIS1O3': { nombre: 'Planeación Estratégica', tipo: 'profesional', semestre: 9, requisitos: ['SIS143'] },
  'SIS1O4': { nombre: 'Gerencia Empresarial', tipo: 'profesional', semestre: 9, requisitos: ['SIS143'] },
//decimo semestre
  'SIS154': { nombre: 'Finalización de la Forma de Culminación de Estudios', tipo: 'profesional', semestre: 10, requisitos: ['SIS152', 'SIS149', 'SIS151', 'SIS153', 'SIS152'] }
};


const estados = JSON.parse(localStorage.getItem('materias_aprobadas') || '{}');
const contenedor = document.getElementById('malla-container');

function puedeDesbloquear(id) {
  const materia = materias[id];
  return materia.requisitos.length === 0 || materia.requisitos.every(req => estados[req]);
}

function crearColumnaSemestre(numero) {
  const columna = document.createElement('div');
  columna.className = 'columna';
  const titulo = document.createElement('h3');
  titulo.textContent = `Semestre ${numero}`;
  columna.appendChild(titulo);
  return columna;
}

function render() {
  contenedor.innerHTML = '';

  // Agrupar materias por semestre
  const porSemestre = {};
  for (const id in materias) {
    const mat = materias[id];
    if (!porSemestre[mat.semestre]) porSemestre[mat.semestre] = [];
    porSemestre[mat.semestre].push({ ...mat, id });
  }

  // Crear columnas del semestre 1 al 10
  for (let s = 1; s <= 10; s++) {
    const columna = crearColumnaSemestre(s);
    const materiasDelSemestre = porSemestre[s] || [];

    materiasDelSemestre.forEach(m => {
      const div = document.createElement('div');
      const aprobada = estados[m.id];
      const desbloqueada = puedeDesbloquear(m.id) || aprobada;
      div.className = `materia ${m.tipo} ${aprobada ? 'aprobada' : ''} ${desbloqueada ? '' : 'bloqueada'}`;
      div.textContent = m.nombre;
      div.title = desbloqueada ? '' : `Requiere: ${m.requisitos.map(r => materias[r]?.nombre || r).join(', ')}`;
      div.onclick = () => {
        if (!puedeDesbloquear(m.id)) return;
        estados[m.id] = !estados[m.id];
        localStorage.setItem('materias_aprobadas', JSON.stringify(estados));
        render();
      };
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

function resetProgress() {
  localStorage.removeItem('materias_aprobadas');
  render();
}

document.getElementById('reiniciar').addEventListener('click', resetProgress);

render();
