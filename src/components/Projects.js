import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Projeto churrasco para iniciantes',
    des: 'Curso online, com a finalidade de ensinar iniciantes no mundo da churrascaria.',
    mission: 'Neste projeto consegui compreender ainda mais o figma e prototipação de projetos, para que sejam posicionados corretamente, usei principalmente flexbox',
    language: 'HTML5, CSS3, JavaScript',
    images: '/project1.PNG'
  },
  {
    name: 'Projeto de Slides e posicionamento de itens',
    des: 'Landing page com a finalidade de aprendizado.',
    mission: 'Neste projeto aprendi realmente como são feitos os slides com dinamicos, com javascript e estilização com css',
    language: 'HTML5, CSS3, JavaScript',
    images: '/project2.PNG'
  },
  {
    name: 'Projeto Agencia dos sonhos',
    des: 'Agencia que visa cresimento de empresas de marketing e outros nichos.',
    mission: 'Neste projeto foi feita uma landing page simples mas com altissíma conversão para vendas.',
    language: 'HTML5, CSS3, React JS',
    images: '/project3.PNG'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Esses são meus projetos
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Lembrando que são projetos fictícios com finalidade de estudo e aprendizado.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Aprendizados</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Linguagens</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
