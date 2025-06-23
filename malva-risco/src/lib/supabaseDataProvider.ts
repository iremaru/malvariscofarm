import { SupabaseClient } from '../utils/supabase/client';
import {
	DataProvider,
	DeleteManyParams,
	DeleteManyResult,
	GetManyParams,
	GetManyReferenceParams,
	GetManyReferenceResult,
	GetManyResult,
	QueryFunctionContext,
	RaRecord,
	UpdateManyParams,
	UpdateManyResult,
} from 'react-admin';

const supabaseDataProvider: DataProvider = {
	getList: async (resource, params) => {
		const pagination = params?.pagination ? params.pagination : {
			page: 0,
			perPage: 8,
		};
		const selectClause = '*';
		const { data, error, count } = await SupabaseClient
			.from(resource)
			.select(selectClause, { count: 'exact' })
			.range(
				(pagination.page - 1) * pagination.perPage,
				pagination.page * pagination.perPage - 1
			);

		if (error) throw error;

		return {
			data,
			total: count ?? 0,
		};
	},

	getOne: async (resource, params) => {
		const { data, error } = await SupabaseClient
			.from(resource)
			.select('*')
			.eq('id', params.id)
			.single();

		if (error) throw error;
		return { data };
	},

	create: async (resource, params) => {
		const { data, error } = await SupabaseClient
			.from(resource)
			.insert(params.data)
			.select()
			.single();

		if (error) throw error;
		return { data };
	},

	update: async (resource, params) => {
		const { data, error } = await SupabaseClient
			.from(resource)
			.update(params.data)
			.eq('id', params.id)
			.select()
			.single();

		if (error) throw error;
		return { data };
	},

	delete: async (resource, params) => {
		console.log('Deleting resource:', resource, 'with params:', params);
		const { data, error } = await SupabaseClient
			.from(resource)
			.delete()
			.eq('id', params.id)
			.select()
			.single();

		if (error) throw error;
		return { data };
	},
	getMany: async function <RecordType extends RaRecord>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
		const { data, error } = await SupabaseClient
			.from(resource)
			.select('*')
			.in('id', params.ids);
		if (error) throw error;
		return { data: data as RecordType[] };

	},
	getManyReference: function <RecordType extends RaRecord>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
		throw new Error('Function not implemented.');
	},
	updateMany: function <RecordType extends RaRecord>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
		throw new Error('Function not implemented.');
	},
	deleteMany: async function <RecordType extends RaRecord>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
		const { data, error } = await SupabaseClient
			.from(resource)
			.delete()
			.eq('id', params.ids)
			.select();

		if (error) throw error;
		return { data };
	}
};

export default supabaseDataProvider;
