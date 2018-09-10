<template>
    <div>
        <p>
            <label for="methodoptions">{{$t('methodOptions', 'I need to')}} {{ methodType &&
                $t(`methodTypes.${methodType}`) }}</label>
            <select id="methodoptions" name="select" v-model="selected">
                <option disabled selected value="">...</option>
                <option :key="option.desc" :value="option" v-for="option in options">
                    {{ option.shortDesc }}
                </option>
            </select>
        </p>
        <method-base :urlPath="selected.name" v-show="isSelected">
            <span slot="title" v-if="selected.name === 'length'">Array.{{selected.name}}</span>
            <span slot="title" v-else>Object.{{selected.name}}()</span>
            <span slot="desc" v-html="selected.desc"></span>
        </method-base>
    </div>
</template>

<script>
    import MethodBase from './MethodBase.vue'

    export default {
        components: {
            MethodBase
        },
        props: {
            methodType: {
                type: String,
                required: false
            },
            options: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                selected: ''
            }
        },
        computed: {
            isSelected() {
                return this.$store.state.selectedMethod
            }
        },
        watch: {
            selected() {
                this.$store.commit('selectionMethod', this.selected)
            }
        }
    }
</script>

<style>
    p.desc code {
        background: #eee;
        font-size: 16px;
        padding: 3px 8px;
        border-radius: 3px;
    }
</style>
