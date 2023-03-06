import { gql } from 'graphql-request';

export const GET_SLIDERS = gql`
query GET_SLIDERS {
  sliders{
   data{
     attributes{
       title:Titulo
       subtitle:Subtitulo
       description:Descricao
       img{data{attributes{url}}}
       endMessage:MensagemFinalDoContador
       bottomMessage:MensagemDeBaixo
       endDateToCalc:DataFinal
     }
   }
 }
}
`;
export const GET_PROFILE = gql`
query GET_PROFILE{
  perfil{
    data{
      attributes{
        profile:FotoDePerfil{
          data{
            attributes{
              url
            }
          }
        }
      	imgWidth:TamanhoDaImagem
      }
    }
  }
}
`;
export const GET_COURSE = gql`
  query GET_COURSE{
  curso{
    data{
      attributes{
       course:TituloCurso
       description:PrimeiroParagrafo
       finalConsider:SegundoParagrafo
      }
    }
  }
}
`;
export const GET_SCHEDULER = gql`
query GET_SCHEDULER{
  schedulers{
    data{
      attributes{
        Date
        Name
        Email
        SmartphoneNumber
        Service
      }
    }
  }
}
`;
