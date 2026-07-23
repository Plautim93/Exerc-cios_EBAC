Feature: Autenticação
    Scenario Outline: Login de usuario
        Given Que eu estou na pagina inicial
        When eu faço login com o usuário "<email>" e senha "<senha>"
        Then o email do usuário deve aparecer na página do perfil

        Examples:
            | email               | senha                    |
            | cliente@ebac.art.br | GD*peToHNJ1#c$sgk08EaYJQ |

        