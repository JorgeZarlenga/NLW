// Lógica para inserção de dados no database

module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) { // async necessário para usar o async
    // Inserir dados na tabela de teachers (cada inserção também demora a ser executada):
    const insertedProffy = await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );

    `) // Crase no js é chamada de template literals ($ coloca variável dentro do texto)

    const proffy_id = insertedProffy.lastID
    
    // Inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule (impossível determinar a quantidade):
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => { // Retorna um novo array // map - Semelhante ao forEach
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // Aqui serão executados todos os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues) // Executa um array de muitas promessas
}