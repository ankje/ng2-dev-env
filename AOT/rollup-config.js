import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';
export default {
    entry: 'src/main.js',
    dest: 'src/build.js', // output a single application bundle
    sourceMap: false,
    format: 'iife',
    onwarn: function(warning) {
        // Skip certain warnings
        // should intercept ... but doesn't in some rollup versions
        if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
        // console.warn everything else
        console.warn( warning.message );
    },
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            //Rollup插件需要我们的代码使用es2015的 import和export语句 来导入导出类库，
            // 但大部分类库像rxjs都是发布成了ES5 JavaScript的CommonJS模块，
            //此时如果我们要用到这类模块的话就应该把它们包含在这里，
            // 让rollup插件把它们转换成它能辨认的 import 和 export语句
            include: 'node_modules/rxjs/**',
        }),
        //压缩代码
        uglify()
    ]
}
