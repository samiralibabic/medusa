---
displayed_sidebar: jsClientSidebar
---

# Class: Note

[internal](../modules/internal-8.md).[internal](../modules/internal-8.internal.md).Note

Base abstract entity for all entities

## Hierarchy

- [`SoftDeletableEntity`](internal-1.SoftDeletableEntity.md)

  ↳ **`Note`**

## Properties

### author

• **author**: [`User`](internal-1.User.md)

#### Defined in

packages/medusa/dist/models/note.d.ts:8

___

### author\_id

• **author\_id**: `string`

#### Defined in

packages/medusa/dist/models/note.d.ts:7

___

### beforeInsert

• `Private` **beforeInsert**: `any`

#### Defined in

packages/medusa/dist/models/note.d.ts:10

___

### created\_at

• **created\_at**: `Date`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[created_at](internal-1.SoftDeletableEntity.md#created_at)

#### Defined in

packages/medusa/dist/interfaces/models/base-entity.d.ts:6

___

### deleted\_at

• **deleted\_at**: ``null`` \| `Date`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[deleted_at](internal-1.SoftDeletableEntity.md#deleted_at)

#### Defined in

packages/medusa/dist/interfaces/models/soft-deletable-entity.d.ts:3

___

### id

• **id**: `string`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[id](internal-1.SoftDeletableEntity.md#id)

#### Defined in

packages/medusa/dist/interfaces/models/base-entity.d.ts:5

___

### metadata

• **metadata**: [`Record`](../modules/internal.md#record)<`string`, `unknown`\>

#### Defined in

packages/medusa/dist/models/note.d.ts:9

___

### resource\_id

• **resource\_id**: `string`

#### Defined in

packages/medusa/dist/models/note.d.ts:6

___

### resource\_type

• **resource\_type**: `string`

#### Defined in

packages/medusa/dist/models/note.d.ts:5

___

### updated\_at

• **updated\_at**: `Date`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[updated_at](internal-1.SoftDeletableEntity.md#updated_at)

#### Defined in

packages/medusa/dist/interfaces/models/base-entity.d.ts:7

___

### value

• **value**: `string`

#### Defined in

packages/medusa/dist/models/note.d.ts:4
