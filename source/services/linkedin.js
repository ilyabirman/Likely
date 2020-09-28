/**
 * LinkedIn service provider
 * Doc: https://stackoverflow.com/questions/33426752/linkedin-share-post-url
 * https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin
 *
 * Supports OpenGraph, please refer https://ogp.me/ to customise shared page data.
 */

export default {
    popupUrl: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
    knownParams: ['url'],
    popupWidth: 600,
    popupHeight: 500,
    svgIconPath: '13.634,13.629 L11.263,13.629 L11.263,9.919 C11.263,9.035 11.247,7.896 10.030,7.896 C8.795,7.896 8.606,8.860 8.606,9.855 L8.606,13.629 L6.234,13.629 L6.234,6.000 L8.510,6.000 L8.510,7.043 L8.542,7.043 C9.006,6.250 9.869,5.777 10.788,5.811 C13.191,5.811 13.634,7.392 13.634,9.445 L13.634,13.629 ZM3.560,4.958 C2.800,4.958 2.184,4.343 2.184,3.583 C2.183,2.824 2.799,2.209 3.559,2.208 C4.319,2.208 4.935,2.823 4.935,3.583 L4.935,3.583 C4.936,4.342 4.320,4.957 3.560,4.958 M4.746,13.629 L2.372,13.629 L2.372,6.000 L4.745,6.000 L4.746,13.629 ZM14.816,0.007 L1.181,0.007 C0.536,0.000 0.008,0.516 -0.000,1.160 L-0.000,14.839 C0.007,15.484 0.536,16.000 1.181,15.993 L14.816,15.993 C15.461,16.000 15.991,15.484 16.000,14.839 L16.000,1.160 C15.991,0.515 15.461,-0.000 14.816,0.007',
};
