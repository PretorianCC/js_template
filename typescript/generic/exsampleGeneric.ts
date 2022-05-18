type FunctionalComponent<T extends object = object> = (props: T & {children: any}) => any

const companent: FunctionalComponent<{name: string, age: number}> = ({name, age, children}) => {}