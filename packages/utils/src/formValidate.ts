import { FieldRule, FieldRuleTrigger } from "@pk-ui/mobile"

export async function formFieldValidate(rules: FieldRule[], value: any, formTrigger: FieldRuleTrigger[], trigger: FieldRuleTrigger | 'force'): Promise<boolean> {
    //validate rules one by one
    for (let rule of rules || []) {
        //check need trigger
        if (trigger === 'force' || (!rule.trigger && formTrigger.includes(trigger))
            || (rule.trigger && (trigger === rule.trigger || (rule.trigger instanceof Array && rule.trigger.includes(trigger))))
        ) {
            //formatter value
            const formatterValue = await (typeof rule.formatter === 'function' ? rule.formatter(value) : value)
            //validate required first
            if (rule.required && !formatterValue) throw new Error(rule.message || '')
            //then validate validator
            if (typeof rule.validator === 'function') {
                let result = await rule.validator(rule, formatterValue)
                if (result === false) throw new Error(rule.message || '')
            }
            //then validate pattern
            if (rule.pattern && !rule.pattern.test(formatterValue)) throw new Error(rule.message || '')
        }
    }

    return true;
}