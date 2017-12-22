
// ++++ components/atoms/button/index.js ++++

// Importar bibliotecas do react.
import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../themes/Default'


import {
  AtCol ,
  AtRow,
  OrFooter,
  OrHeaderMenu,
  OrBanner,
  MoHero,
  Tabs,
  Tab,
  MoSliDown,
  MoSliDownContent
} from '@ComponentsOi'

let Div = styled.div`
  position: relative;

  > div:nth-child(1){

    * {
      font-family: Simplon;
      color: #DCDCDC !important;
    }
  }

  .hr{
    height: 1px;
    width: 100%;
    background-image: -webkit-linear-gradient(left,#f0f0f0,#909090,#f0f0f0);
    opacity: 0.15;
  }

  & .tabwrapper{
    input:checked ~ label{
      background-image:
        linear-gradient(${theme.gradients.primary.direction},
          ${theme.gradients.primary.from},
              ${theme.gradients.primary.to}) !important;

      color: ${theme.colors.link} !important;
    }
  }

  & > div > div:nth-child(1){
    background-image:
    linear-gradient(${theme.gradients.primary.direction},
      ${theme.gradients.primary.from},${theme.gradients.primary.to}) !important;

    & span{
      color: ${theme.colors.link} !important;
    }
  }

  & > div > div:nth-child(4){
    background-image:
    linear-gradient(${theme.gradients.primary.direction},
      ${theme.gradients.primary.from},${theme.gradients.primary.to}) !important;
  }

  & > div > div:nth-child(5){
    & svg:not(#Layer_1), & g path{
      fill: ${theme.colors.primary} !important;
    }

    > div:nth-child(2)  div:nth-child(2){
      & button, & a{
        background-color: ${theme.colors.primary} !important;
      }
    }
  }

  & h1{
    color: ${theme.colors.info} !important;
  }
  & span{
    color: ${theme.colors.info} !important;
  }

  & g{
    stroke: ${theme.colors.primary} !important;
    /* fill: ${theme.colors.primary} !important; */
  }

  .svgContainer{
    min-width: 100vw;
    position: absolute;
    bottom: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 73.13rem;
    }

    #Layer_1{
      width: 80px;
      height: 80px;
    }
  }



  & svg:not(#Layer_1), & svg:not(#Layer_1) g path:nth-child(2){
    fill: ${theme.colors.primary} !important;
  }

  & .contentabs{
    border-bottom: 4px solid ${theme.colors.primary} !important;
  }
`


const items = (JSONTarget) => {
	return JSONTarget.get('JSONCardsH1').map((item, index) => {
    item = item.toJS();
		return <MoSliDown
        			JSONCard={item}
        			key={index}
        			Texto="Mais detalhes"
        			Icon="arrow"
        			urlImg={item.urlImg}
        			CardType={item.CardType}>
        			   <MoSliDownContent JSONCard={item} />
		       </MoSliDown>
	        })
}

const items2 = (JSONTarget) => {
	return JSONTarget.get('JSONCardsH2').map((item, index) => {
    item = item.toJS();
		return <MoSliDown
			JSONCard={item}
			key={index}
			Texto="Mais detalhes"
			Icon="arrow"
			urlImg={item.urlImg}
			CardType={item.CardType}>
			<MoSliDownContent JSONCard={item} />
		</MoSliDown>
	})
}


const itemsVertical = (JSONTarget) => {
	return JSONTarget.get('JSONCardsVertical1').map((item, index) => {
    item = item.toJS();
		return <MoSliDown
			JSONCard={item}
			key={index}
			Texto="Mais detalhes"
			Icon="arrow"
			urlImg={item.urlImg}
			CardType={item.CardType}>
			<MoSliDownContent JSONCard={item} />
		</MoSliDown>
	})
}

const itemsVertical2 = (JSONTarget) => {
	return JSONTarget.get('JSONCardsVertical2').map((item, index) => {
    item = item.toJS();
		return <MoSliDown
        			JSONCard={item}
        			key={index}
        			Texto="Mais detalhes"
        			Icon="arrow"
        			urlImg={item.urlImg}
        			CardType={item.CardType}>
        			<MoSliDownContent JSONCard={item} />
		</MoSliDown>
	})
}



class SVA extends React.Component {

  render() {
    let { JSONTarget } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Div>
          test
          <AtCol>

        				<MoHero
        							img = {JSONTarget.get('JSONBanner').get('AtSecImg')}
        							titulo = "UM MUNDO DE SERVIÇOS OI PRA VOCÊ"
        							texto = "Saúde, educação, proteção digital e muito mais. Tenha os melhores serviços da Oi ao alcance do seu computador, tablet ou celular."
        					/>
        			<Tabs>
        					<Tab
        						content={items(JSONTarget)}
        						title={JSONTarget.get('TabTitle1')}
                    IsFirst>
        						      {itemsVertical(JSONTarget)}
        					</Tab>
        					<Tab
        						content={items2(JSONTarget)}
        						title={JSONTarget.get('TabTitle2')}>
        						      {itemsVertical2(JSONTarget)}
        					</Tab>
        				</Tabs>
        				{/*<OrBanner JSONBanner={JSONTarget.get('JSONBanner').toJS()}/>
            		<OrFooter JSONFooter={JSONTarget.get('JSONFooter').toJS()}/>*/}
          </AtCol>
        </Div>
      </ThemeProvider>
    )
  }
}

export default SVA
export { SVA }
