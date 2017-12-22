
// ++++ components/atoms/button/index.js ++++

// Importar bibliotecas do react.
import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../themes/Default'


/*import {
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
} from '@ComponentsOi'*/

import * as All from 'ComponentsOi'
import  {SimpleHeader, Grid, Theme, Title, Text, LogoOi, Icon} from 'ComponentsOi'

console.log(All)




class SVA extends React.Component {

  render() {
    let { JSONTarget } = this.props;
		let {MinhaOi} = Theme;
    return (
			<ThemeProvider theme={ MinhaOi }>
        <SimpleHeader
            logoImg={LogoOi}
            logoDescription={<Icon type='minhaoi' autoSize />}
            nameUser={"Nome do usuário"}
            notifications={[
                {
                    text: 'Acesse as funcionalidades da Minha Oi como 2ª via de conta, consulta de saldo e muito mais.',
                    labelLink: 'Acessar',
                    hrefLink: '#'
                },
                {
                    text: 'Acesse as funcionalidades da Minha Oi como 2ª via de conta, consulta de saldo e muito mais.',
                    labelLink: 'Acesse',
                    hrefLink: '#'
                },
                {
                    text: 'Acesse as funcionalidades da Minha Oi como 2ª via de conta, consulta de saldo e muito mais.',
                    labelLink: 'Acesse',
                    hrefLink: '#'
                }
            ]}

            menuOptions={[
                {
                    title: 'Conta',
                    menus: [
                        {
                            hrefLink: '#',
                            labelLink: '2ª via de conta'
                        },
                        {
                            hrefLink: '#',
                            labelLink: 'Alterar data de vencimento'
                        }
                    ]
                },
                {
                    title: 'Assista e Navegue',
                    menus: [
                        {
                            hrefLink: '#',
                            labelLink: '2ª via de conta'
                        },
                        {
                            hrefLink: '#',
                            labelLink: 'Alterar data de vencimento'
                        }
                    ]
                },
                {
                    title: 'Atendimento',
                    menus: [
                        {
                            hrefLink: '#',
                            labelLink: '2ª via de conta'
                        },
                        {
                            hrefLink: '#',
                            labelLink: 'Alterar data de vencimento'
                        }
                    ]
                }
            ]}
        />
    </ThemeProvider>
    )
  }
}

export default SVA
export { SVA }
