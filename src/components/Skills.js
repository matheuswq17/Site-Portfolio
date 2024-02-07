import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel, faPython, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    icon: faReact
  },
  {
    name: 'BootStrap',
    des: 'é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript.',
    icon: faBootstrap
  },
  {
    name: 'Python',
    des: 'é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
    icon: faPython
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Tecnologias que domino:
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Aqui está algumas das Tecnologias que uso em meu dia a dia!
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

