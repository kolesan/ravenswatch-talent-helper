const base = `/icons`;
const talents = `${base}/talents`;
const objects = `${base}/objects`;

export const imagePathUtils = {
    talents: {
        frames: {
            common: `${talents}/new/optimized/talent_frame_common.webp`,
            ultimate: `${talents}/new/optimized/ultimate_frame.webp`,
        },
        locked: `${talents}/locked_talent.webp`,
        byCode(heroCode: string, talentCode: string) {
            return `${talents}/new/optimized/${heroCode}/${talentCode}.webp`;
        },
    },
    objects: {
        byCode(type: string, code: string) {
            return `${objects}/new/optimized/${type}/${code}.webp`;
        },
        frame(type: string) {
            return `${objects}/new/optimized/${type}/frame.webp`;
        }
    },
    feather: `/icons/feather.webp`,
}
