import firstBlendImage from './images/canvasBlendImage-1.jpg';
import secondBlendImage from './images/canvasBlendImage-2.jpg';

const SceneInfo = [
    {
        type:'sticky',
        heightNum:8,
        scrollHeight:0,
        values: {
                messageA_opacity_in: [0, 1, { start: 0.01, end: 0.1 }],
                messageB_opacity_in: [0, 1, { start: 0.21, end: 0.3 }],
                messageC_opacity_in: [0, 1, { start: 0.41, end: 0.5 }],
                messageA_translateY_in: [20, 0, { start: 0.01, end: 0.1 }],
                messageB_translateY_in: [20, 0, { start: 0.21, end: 0.3 }],
                messageC_translateY_in: [20, 0, { start: 0.41, end: 0.5 }],
                messageA_opacity_out: [1, 0, { start: 0.11, end: 0.2 }],
                messageB_opacity_out: [1, 0, { start: 0.31, end: 0.4 }],
                messageC_opacity_out: [1, 0, { start: 0.51, end: 0.6 }],
                messageA_translateY_out: [0, -20, { start: 0.11, end: 0.2 }],
                messageB_translateY_out: [0, -20, { start: 0.31, end: 0.4 }],
                messageC_translateY_out: [0, -20, { start: 0.51, end: 0.6 }],
                imagePath: [
                    firstBlendImage,
                    secondBlendImage
                    
                ],
                images:[],
                rect1X: [0, 0, {start: 0, end: 0}],
                rect2X: [0, 0, {start: 0, end: 0}],
                blendHeight: [0, 0, {start: 0, end: 0}],
                canvas_scale: [0, 0, {start: 0, end: 0}],
                rectStartY: 0
        }
    },
    {
        type:'normal',
        heightNum:2,
        scrollHeight:0,
        values: {
            large_title_opacity_out:[1, 0, {start:0, end: 0.02}],
            large_content_opacity_in:[0, 1, {start:0.02, end:0.05}],
            small_tile_wrapper_translateY:[50, 0, {start:0.1, end:0.2}],
            small_tile_moving_translateY:[30,0, {start:0.2, end: 0.35}],
            medium_tile_wrapper_translateY:[35,0,{start:0.35, end:0.4}]
        }
    }
];


export default SceneInfo;