import React, {lazy as Lazy, Suspense} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Landing  = Lazy(() => import('./pages/Landing'))
const TeacherList = Lazy(() => import('./pages/TeacherList'))
const TeacherForm = Lazy(() => import('./pages/TeacherForm'))

function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/" exact component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes