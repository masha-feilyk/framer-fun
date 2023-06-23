const parse = require('@babel/parser').parse

const stylesDefinition = `
    const transformStyle = {};
    if(rotate) {
        const rotateStyle = rotate ? 'rotate(' + rotate + 'deg)' : ''

        transformStyle.transform = [rotateStyle].join(' ');
    }

    const style = {...transformStyle, ...props.style}

    const additionalAttributes = {}

    if(width || height) {
      additionalAttributes.height = height
      additionalAttributes.width = width
    }
`

const stylesDefinitionAst = parse(stylesDefinition).program.body

const customProps = ['rotate', 'width', 'height']

const propsRest = {
  type: 'RestElement',
  argument: {
    type: 'Identifier',
    name: 'props'
  }
}

const props = {
  type: 'ObjectPattern',
  properties: [
    ...customProps.map((prop) => ({
      type: 'Identifier',
      name: prop
    })),
    propsRest
  ]
}

module.exports = (
  { imports, interfaces, componentName, jsx, exports },
  { tpl }
) => {
  jsx.openingElement.attributes = [
    ...jsx.openingElement.attributes,
    {
      type: 'JSXAttribute',
      name: {
        type: 'JSXIdentifier',
        name: 'style'
      },
      value: {
        type: 'JSXExpressionContainer',
        expression: {
          type: 'Identifier',
          name: 'style'
        }
      }
    },
    {
      type: 'JSXAttribute',
      name: {
        type: 'JSXIdentifier',
        name: 'ref'
      },
      value: {
        type: 'JSXExpressionContainer',
        expression: {
          type: 'Identifier',
          name: 'ref'
        }
      }
    },
    ...jsx.openingElement.attributes,
    {
      type: 'JSXSpreadAttribute',
      argument: {
        type: 'Identifier',
        name: 'additionalAttributes'
      }
    }
  ]

  return tpl`
${imports};
${interfaces};
const ${componentName} = React.forwardRef((${props}, ref) => {
    ${stylesDefinitionAst}
    return ${jsx}
});
 
${exports};
`
}
