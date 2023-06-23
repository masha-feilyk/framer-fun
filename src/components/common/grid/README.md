# Grid

Grid system is implemented with Grid and Col components. It uses CSS Grid to create complex flexible layouts.

## Usage

```jsx
return (
  <Grid>
    <Col sm={6} lg={{ span: 2, start: 3 }}>
      Variable width content
    </Col>
    <Col sm={{ order: 1, span: 6 }} lg={8}>
      Variable width content
    </Col>
  </Grid>
)
```
