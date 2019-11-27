import PropTypes from "prop-types"
import React from "react"
import pickBy from "lodash.pickby"
import sortBy from "lodash.sortby"
import classnames from "classnames"
import { getOperationName } from "apollo-utilities"
import { parse } from "graphql/language/printer"
import { print } from "graphql/language/printer"
import { GraphqlCodeBlock } from "graphql-syntax-highlighter-react"
import { Sidebar } from "../Sidebar"
import Warning from "../WatchedQueries/WatchedQueries.less"


const mutationLabel=(mutationId, mutation) => {
    const mutatioName = getOperationName(
        mutation.mutationString
        ? parse(mutation.mutationString)
        : mutation.mutation,
    )

    if(!mutationName){
        return mutationId
    }
    return `${mutationName}`
}

class Mutations extends React.Component