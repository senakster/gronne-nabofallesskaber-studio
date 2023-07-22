import blockTypes from '../blocks'
console.log(blockTypes.map(b => ({ type: b.name })),)

export default {
    name: 'contentBlocks',
    title: 'Indholdsblokke',
    // icon: AiOutlineBlock,
    type: 'array',
    of: blockTypes.map(b => ({ type: b.name })),
    preview: {
        // select: {
        //     contentBlocks: 'contentBlocks',
        // },
        prepare(selection: any) {
            // const { contentBlocks } = selection

            return {
                title: 'title',
                subtitle: 'Indholdsblokke',
                // media: AiOutlineBlock,
            }
        }
    }
}