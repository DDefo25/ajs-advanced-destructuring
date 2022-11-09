import getSpecial from "../getSpecial";

test("get Array special attacks from obj", () => {
    const expecting = [
        {
            id: 8,
            name: "Двойной выстрел",
            icon: "http://...",
            description: "Двойной выстрел наносит двойной урон",
        },
        {
            id: 9,
            name: "Нокаутирующий удар",
            icon: "http://...",
            description: "Описание недоступно",
        },
    ];

    const character = {
        special: [
            {
                id: 8,
                name: "Двойной выстрел",
                icon: "http://...",
                description: "Двойной выстрел наносит двойной урон",
            },
            {
                id: 9,
                name: "Нокаутирующий удар",
                icon: "http://...",
            },
        ],
    };

    const result = getSpecial(character);
    expect(result).toEqual(expecting);
});

test("throw Error of incorrected obj w/o props \"special\"", () => {
    const character = {};
    function throwError() {
        getSpecial(character);
    }

    expect(throwError).toThrowError(Error("Передан некорректный объект"));
});
