/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agent = "agent",
	Maison = "maison",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentRecord = {
	adressmail?: string
	imageAgent?: string
	informationsAgent?: string
	nbTelephone?: number
	nomAgent?: string
	prenomAgent?: string
}

export type MaisonRecord = {
	Favori?: boolean
	adresse?: string
	image?: string
	nbChambres?: number
	nbSdb?: number
	nomMaison?: string
	prix?: number
	surface?: number
}

// Response types include system fields and match responses from the PocketBase API
export type AgentResponse<Texpand = unknown> = Required<AgentRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agent: AgentRecord
	maison: MaisonRecord
}

export type CollectionResponses = {
	agent: AgentResponse
	maison: MaisonResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agent'): RecordService<AgentResponse>
	collection(idOrName: 'maison'): RecordService<MaisonResponse>
}
