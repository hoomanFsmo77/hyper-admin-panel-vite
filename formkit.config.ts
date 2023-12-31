import { DefaultConfigOptions,defaultConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin,createMultiStepPlugin  } from '@formkit/addons'
import {
    custom_password_schema,
    custom_text_schema,
    custom_placeholder_schema,
    custom_number_schema, custom_date_schema, custom_area_schema, custom_radio_schema
} from './formkit.schema'


const config: DefaultConfigOptions = defaultConfig({
    inputs: {
        custom_text:custom_text_schema,
        custom_password:custom_password_schema,
        custom_placeholder:custom_placeholder_schema,
        custom_number:custom_number_schema,
        custom_date:custom_date_schema,
        custom_area:custom_area_schema,
        custom_radio:custom_radio_schema,

    },
    plugins: [
        createFloatingLabelsPlugin({
            useAsDefault: true, // defaults to false
        }),
        createMultiStepPlugin()
    ],
    content: ['./src/**/*.{html,js,vue}', './path/to/formkit.config.js']
})


export default config