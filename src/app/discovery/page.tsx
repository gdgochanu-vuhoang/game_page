export default function Discovery() {
    const COLORS = [
        {
            section: 'Beige',
            hues: [
                {
                    name: 'Light Beige',
                    cn: 'beige-light',
                    code: '#fdf6e3'
                },
                {
                    name: 'Base Beige',
                    cn: 'beige-base',
                    code: '#eee8d5'
                },
                {
                    name: 'Dark Beige',
                    cn: 'beige-dark',
                    code: '#ddd6c1'
                }
            ],
        },
        {
            section: 'Mauve',
            hues:
                [
                    {
                        name: 'Light Mauve',
                        cn: 'mauve-light',
                        code: '#fde3f7'
                    },
                    {
                        name: 'Base Mauve',
                        cn: 'mauve-base',
                        code: '#eed5e7'
                    },
                    {
                        name: 'Dark Mauve',
                        cn: 'mauve-dark',
                        code: '#ddc1d6'
                    },
                ]
        }
    ]


    return (
        <>
            <div className="flex flex-col bg-black">
                { COLORS.map((color) => 
                <div key={color.section} className="flex">

                </div>
            )
                }
            </div>
        </>
    )
}