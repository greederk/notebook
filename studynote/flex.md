display: flex;  指定父元素为伸缩盒子,他的子元素自动成为伸缩项（item）

display:inline-flex ; 行内元素也可以使用flex   



容器的属性 （参考<http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>）

flex-direction : row(默认值，水平) row-reverse(起点在右端)  column(垂直，起点在上部)  column-reverse

flex-wrap:nowrap ：(默认不换行)   wrap（换行） wrap-reverse(换行，第一行在下方)

flex-flow：是felx-direvtion 和 flex-wrap 的简写

justify-content ：定义子项在主轴的对齐方式flex-start(左对齐)  flex-end(右对齐)   center   space-between(两端对齐，间隔相等)  space-around(每个项目间隔两侧相等)

align-items：项目在交叉轴的对齐方式  flex-start(交叉轴的起点对齐)  flex-end(交叉轴的终点对齐)  center（交叉轴的中点对齐）baseline(项目的第一行的文字的基线对齐)  stretch(默认，如果项目未设置高度或者为auto，将充满容器)

 align-content：属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。



项目的属性

order : 定义项目的排列顺序数值越小越靠前，默认是0

flex-grow: 定义项目的放大比例，默认为0（不放大）

flex-shrink : 缩小比例 默认是1，例如a是0，b,c，d是1，则空间不足时，bcd都将缩小，a不缩小

flex-basis: 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）它的默认值为`auto`，即项目的本来大小,可以设置px值

align-self: 允许单个项和其他项有不一样的对齐方式，可以覆盖align-items，