const Localization = {
    Ru: {
        Price: "Цена: ",
        PriceCurrency: "$",
        MoneyToSpent: "Доступно средств: ",
        CanFireNearBlocksOnBreak: "Огнеопасный блок",
        PartName_engine: "Двигатель",
        PartDescr_engine: "Позволяет ускориться при нажатии&nbsp;W",
        PartName_block: "Блок",
        PartDescr_block: "Используется для защиты других компонентов и в качестве крепления",
        PartName_gyro_00: "Гироскоп",
        PartDescr_gyro_00: "Позволяет поворачивать корабль при нажатии Q и E",
        PartName_turret_02: "Турель",
        PartDescr_turret_02: "Стреляет при нажатии на пробел",
        PartName_turret_03: "Турель",
        PartDescr_turret_03: "Стреляет при нажатии на пробел",

        TutorialStart1: "Приветствую, командир! Добро пожаловать в первую (и единственную) космобригаду планеты М.",
        TutorialStart2: "Наш флот немногочислен, но всегда делал упор на профессионализм, поэтому займёмся подготовкой.",
        TutorialStart3: "Твоя задача: подготовить корабль и достигнуть заданных точек.",
        TutorialShoot1: "Вижу курс манёвров ты усвоил как надо.",
        TutorialShoot2: "Теперь посмотрим как ты стреляешь. У нас тут снова дроны нарушители. Вот на них и отработай стрельбу.",
        TutorialComplete1: "Обстановка в мире сложная, поэтому такой талантливый командир как ты нам очень пригодится.",
        TutorialComplete2: "А пока что отбой!",

        Mission1_1: "Радары засекли передовой отряд красных.",
        Mission1_2: "Если они высадятся, синие вступят в войну и погибнет много наших.",
        Mission1_3: "Нарушителей необходимо перехватить.",
        Mission1_4: "Враг уничтожен, теперь гражданские успеют эвакуироваться!",
        Mission1_5: "Сегодня ты спас много жизней, но обстановка всё ещё непростая...",
    },

    HasKey: function (key) {
        return this.Ru[key] != null; //TODO
    },

    Get: function (key) {
        return this.Ru[key]; //TODO
    }
}