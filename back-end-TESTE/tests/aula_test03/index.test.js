import { divisao } from '../../scripts/aula_scripts03/exemplos/divisao.js'
import { cursos } from '../../scripts/aula_scripts03/exemplos/cursos.js'
import { influencer } from '../../scripts/aula_scripts03/exemplos/deolane.js'
import { maxAlunos } from '../../scripts/aula_scripts03/exemplos/numeroMax.js'

test("Verificar se o segundo argumento é zero", () => {
    expect(() => divisao(10,0)).toThrow(Error)
})

test("Verificar se o curso de moda está ativo", () => {
    const fraseDoDia = "O sol está escaldante em Maceió";

    expect(cursos).toContain("Moda");
    expect(fraseDoDia).toContain("sol");
})

test("Verificar se a propriedade triguinho existe no objetp influencer", () => {
    expect(influencer).toHaveProperty("triguinho")
    expect(influencer).not.toHaveProperty("BET")
    expect(influencer).toHaveProperty("endereco.cidade", "Hellcife")
})
test("Verificar número máximo e mínimo,", () => {
    expect(maxAlunos).toBeGreaterThan(25)
    expect(maxAlunos).toBeLessThan(40)
})