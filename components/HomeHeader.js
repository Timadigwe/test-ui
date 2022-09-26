import {HStack, View, VStack} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';

const {height, width} = Dimensions.get('screen');

const HomeHeader = () => {
  return (
    <HStack h={height * 0.245} bg="#FFB531">
      <VStack>
        <Svg width="92" height="80" viewBox="0 0 92 88" fill="none">
          <Path
            d="M82.1325 25.2403C112.314 65 60.5001 108 23.736 75.9208C-1.05531 54.2887 -44.3084 -29.3231 -27.8573 -57.8173C-11.4061 -86.3115 12.0072 -71.3176 44.0001 -79C98.4573 -92.0766 10.2294 -69.4824 82.1325 25.2403Z"
            fill="url(#paint0_linear_4_29)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear_4_29"
              x1="116.807"
              y1="-80.7856"
              x2="35.1284"
              y2="60.6867"
              gradientUnits="userSpaceOnUse">
              <Stop offset="1" stopColor="#363ECF" />
              <Stop offset="0" stopColor="#29A4EC" />
            </LinearGradient>
          </Defs>
        </Svg>

        <Svg width="151" height="275" viewBox="0 0 161 55" fill="none">
          <Circle
            cx="13.5"
            cy="137.5"
            r="137.5"
            fill="url(#paint0_linear_19_205)"
          />
          <Defs>
            <LinearGradient
              id="paint0_linear_19_205"
              x1="13.4989"
              y1="147.822"
              x2="13.4995"
              y2="275"
              gradientUnits="userSpaceOnUse">
              <Stop stopColor="#1CD8D2" />
              <Stop offset="1" stopColor="#93EDC7" />
            </LinearGradient>
          </Defs>

          <Svg width="167" height="70" viewBox="0 0 162 55" fill="none">
            <Circle
              cx="9.5"
              cy="137.5"
              r="137.5"
              fill="url(#paint0_linear_19_206)"
            />
            <Circle
              cx="9.5"
              cy="137.5"
              r="136.5"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="2"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_19_206"
                x1="9.49891"
                y1="147.822"
                x2="9.49949"
                y2="275"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#1CD8D2" />
                <Stop offset="1" stopColor="#93EDC7" />
              </LinearGradient>
            </Defs>
          </Svg>
        </Svg>
      </VStack>

      <HStack>
        {/* 2 */}
        <View right={-width * 0.6} position="absolute">
          <Svg width="285" height="812" viewBox="0 0 265 812">
            <Path
              d="M677.251 646.131C677.251 817.891 66.1142 1052.8 199.114 590.799C288.933 278.799 -52.8857 246.799 7.11425 -13.201C59.3765 -239.671 202.49 15.1306 374.251 15.1306C546.012 15.1306 677.251 474.37 677.251 646.131Z"
              fill="url(#paint0_linear_19_201)"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_19_201"
                x1="119.114"
                y1="-213.201"
                x2="281.114"
                y2="774.799"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#F12711" />
                <Stop offset="1" stopColor="#F5AF19" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>

        {/* 18 */}
        <View right={-width * 0.61} position="absolute">
          <Svg width="287" height="812" viewBox="0 0 257 812">
            <Path
              d="M677.251 640.131C677.251 811.891 66.1142 1046.8 199.114 584.799C288.933 272.799 -52.8857 240.799 7.11425 -19.201C59.3765 -245.671 202.49 9.13061 374.251 9.13061C546.012 9.13061 677.251 468.37 677.251 640.131Z"
              fill="url(#paint0_linear_19_202)"
            />
            <Path
              d="M676.251 640.131C676.251 661.307 666.828 683.556 650.451 705.417C634.079 727.27 610.812 748.661 583.263 768.098C528.161 806.975 456.065 837.941 388.145 849.138C320.18 860.343 256.682 851.716 218.436 811.813C180.219 771.94 166.859 700.458 200.075 585.076C222.583 506.891 218.065 446.174 199.509 395.021C180.966 343.902 148.429 302.41 115.062 262.656C111.172 258.022 107.272 253.411 103.38 248.812C40.4506 174.43 -20.0429 102.927 8.08864 -18.9761C21.1449 -75.5533 39.7839 -101.592 62.6951 -109.369C74.1671 -113.263 86.8507 -112.635 100.69 -108.796C114.534 -104.956 129.465 -97.9213 145.386 -89.0871C159.296 -81.3685 173.919 -72.3006 189.199 -62.8251C191.405 -61.4567 193.626 -60.0797 195.86 -58.6971C213.552 -47.7476 232.08 -36.4516 251.305 -26.26C289.748 -5.88182 331.07 10.1306 374.251 10.1306C416.728 10.1306 456.879 38.5342 493.274 84.1938C529.646 129.824 562.11 192.496 589.232 260.59C643.482 396.793 676.251 554.415 676.251 640.131Z"
              stroke="white"
              stroke-opacity="0.6"
              stroke-width="2"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_19_202"
                x1="119.114"
                y1="-219.201"
                x2="281.114"
                y2="768.799"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#F12711" />
                <Stop offset="1" stopColor="#F5AF19" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
      </HStack>

      <HStack>
        {/* 1 */}
        <View left={-width * 0.05} position="absolute">
          <Svg width="273" height="812" viewBox="0 0 223 812">
            <Path
              d="M649.22 277C649.22 448.76 928.94 912.64 440.219 896C-352.781 869 437.585 457.739 73.2773 128C-200.723 -120 369.517 -300 541.277 -300C713.038 -300 649.22 105.239 649.22 277Z"
              fill="url(#paint0_linear_19_203)"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_19_203"
                x1="444.091"
                y1="-286"
                x2="444.091"
                y2="928.436"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#F64F00" />
                <Stop offset="1" stopColor="#FFB531" stopOpacity="0.52" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>

        {/* 17 */}
        <View left={-width * 0.045} position="absolute">
          <Svg width="275" height="812" viewBox="0 0 215 812" fill="none">
            <Path
              d="M649.22 274C649.22 445.76 928.94 909.64 440.219 893C-352.781 866 437.585 454.739 73.2773 125C-200.723 -123 369.517 -303 541.277 -303C713.038 -303 649.22 102.239 649.22 274Z"
              fill="url(#paint0_linear_19_204)"
            />
            <Path
              d="M648.22 274C648.22 295.586 652.612 321.71 659.31 350.818C665.389 377.236 673.382 406.169 681.751 436.463C682.606 439.557 683.465 442.665 684.326 445.786C702.918 513.184 722.58 586.654 726.992 654.215C731.404 721.781 720.55 783.224 678.336 826.759C636.12 870.296 562.311 896.156 440.253 892C341.164 888.627 266.862 879.252 211.971 864.805C157.071 850.356 121.681 830.858 100.309 807.307C78.9661 783.789 71.5086 756.127 72.687 725.115C73.8668 694.065 83.704 659.699 96.9298 622.865C103.336 605.024 110.538 586.606 117.922 567.721C140.986 508.736 165.833 445.194 173.781 380.433C184.292 294.8 165.293 206.935 73.9484 124.259C39.7793 93.3318 18.8381 63.5252 8.615 35.0681C-1.60152 6.62952 -1.13337 -20.5126 7.60145 -46.1778C25.0938 -97.5748 75.7858 -143.168 140.622 -181.137C205.418 -219.082 284.154 -249.303 357.432 -270.038C430.722 -290.776 498.467 -302 541.277 -302C562.534 -302 580.106 -295.737 594.616 -284.462C609.142 -273.176 620.651 -256.828 629.692 -236.59C647.783 -196.092 655.903 -140.225 658.66 -78.8654C661.415 -17.5279 658.808 49.1877 655.509 111.329C654.747 125.679 653.948 139.787 653.17 153.529C650.58 199.27 648.22 240.953 648.22 274Z"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="2"
            />
            <Defs>
              <LinearGradient
                id="paint0_linear_19_204"
                x1="444.091"
                y1="-289"
                x2="444.091"
                y2="925.436"
                gradientUnits="userSpaceOnUse">
                <Stop stopColor="#F64F00" />
                <Stop offset="1" stopColor="#FFB531" stopOpacity="0.52" />
              </LinearGradient>
            </Defs>
          </Svg>
        </View>
      </HStack>
    </HStack>
  );
};

export default HomeHeader;