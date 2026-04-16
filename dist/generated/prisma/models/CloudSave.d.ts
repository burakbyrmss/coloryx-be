import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CloudSave
 *
 */
export type CloudSaveModel = runtime.Types.Result.DefaultSelection<Prisma.$CloudSavePayload>;
export type AggregateCloudSave = {
    _count: CloudSaveCountAggregateOutputType | null;
    _avg: CloudSaveAvgAggregateOutputType | null;
    _sum: CloudSaveSumAggregateOutputType | null;
    _min: CloudSaveMinAggregateOutputType | null;
    _max: CloudSaveMaxAggregateOutputType | null;
};
export type CloudSaveAvgAggregateOutputType = {
    version: number | null;
};
export type CloudSaveSumAggregateOutputType = {
    version: number | null;
};
export type CloudSaveMinAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
    version: number | null;
    userId: string | null;
};
export type CloudSaveMaxAggregateOutputType = {
    id: string | null;
    updatedAt: Date | null;
    version: number | null;
    userId: string | null;
};
export type CloudSaveCountAggregateOutputType = {
    id: number;
    updatedAt: number;
    version: number;
    payloadJson: number;
    userId: number;
    _all: number;
};
export type CloudSaveAvgAggregateInputType = {
    version?: true;
};
export type CloudSaveSumAggregateInputType = {
    version?: true;
};
export type CloudSaveMinAggregateInputType = {
    id?: true;
    updatedAt?: true;
    version?: true;
    userId?: true;
};
export type CloudSaveMaxAggregateInputType = {
    id?: true;
    updatedAt?: true;
    version?: true;
    userId?: true;
};
export type CloudSaveCountAggregateInputType = {
    id?: true;
    updatedAt?: true;
    version?: true;
    payloadJson?: true;
    userId?: true;
    _all?: true;
};
export type CloudSaveAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CloudSave to aggregate.
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CloudSaves to fetch.
     */
    orderBy?: Prisma.CloudSaveOrderByWithRelationInput | Prisma.CloudSaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CloudSaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CloudSaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CloudSaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CloudSaves
    **/
    _count?: true | CloudSaveCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CloudSaveAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CloudSaveSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CloudSaveMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CloudSaveMaxAggregateInputType;
};
export type GetCloudSaveAggregateType<T extends CloudSaveAggregateArgs> = {
    [P in keyof T & keyof AggregateCloudSave]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCloudSave[P]> : Prisma.GetScalarType<T[P], AggregateCloudSave[P]>;
};
export type CloudSaveGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CloudSaveWhereInput;
    orderBy?: Prisma.CloudSaveOrderByWithAggregationInput | Prisma.CloudSaveOrderByWithAggregationInput[];
    by: Prisma.CloudSaveScalarFieldEnum[] | Prisma.CloudSaveScalarFieldEnum;
    having?: Prisma.CloudSaveScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CloudSaveCountAggregateInputType | true;
    _avg?: CloudSaveAvgAggregateInputType;
    _sum?: CloudSaveSumAggregateInputType;
    _min?: CloudSaveMinAggregateInputType;
    _max?: CloudSaveMaxAggregateInputType;
};
export type CloudSaveGroupByOutputType = {
    id: string;
    updatedAt: Date;
    version: number;
    payloadJson: runtime.JsonValue;
    userId: string;
    _count: CloudSaveCountAggregateOutputType | null;
    _avg: CloudSaveAvgAggregateOutputType | null;
    _sum: CloudSaveSumAggregateOutputType | null;
    _min: CloudSaveMinAggregateOutputType | null;
    _max: CloudSaveMaxAggregateOutputType | null;
};
export type GetCloudSaveGroupByPayload<T extends CloudSaveGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CloudSaveGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CloudSaveGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CloudSaveGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CloudSaveGroupByOutputType[P]>;
}>>;
export type CloudSaveWhereInput = {
    AND?: Prisma.CloudSaveWhereInput | Prisma.CloudSaveWhereInput[];
    OR?: Prisma.CloudSaveWhereInput[];
    NOT?: Prisma.CloudSaveWhereInput | Prisma.CloudSaveWhereInput[];
    id?: Prisma.StringFilter<"CloudSave"> | string;
    updatedAt?: Prisma.DateTimeFilter<"CloudSave"> | Date | string;
    version?: Prisma.IntFilter<"CloudSave"> | number;
    payloadJson?: Prisma.JsonFilter<"CloudSave">;
    userId?: Prisma.StringFilter<"CloudSave"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CloudSaveOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    payloadJson?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CloudSaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.CloudSaveWhereInput | Prisma.CloudSaveWhereInput[];
    OR?: Prisma.CloudSaveWhereInput[];
    NOT?: Prisma.CloudSaveWhereInput | Prisma.CloudSaveWhereInput[];
    updatedAt?: Prisma.DateTimeFilter<"CloudSave"> | Date | string;
    version?: Prisma.IntFilter<"CloudSave"> | number;
    payloadJson?: Prisma.JsonFilter<"CloudSave">;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type CloudSaveOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    payloadJson?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.CloudSaveCountOrderByAggregateInput;
    _avg?: Prisma.CloudSaveAvgOrderByAggregateInput;
    _max?: Prisma.CloudSaveMaxOrderByAggregateInput;
    _min?: Prisma.CloudSaveMinOrderByAggregateInput;
    _sum?: Prisma.CloudSaveSumOrderByAggregateInput;
};
export type CloudSaveScalarWhereWithAggregatesInput = {
    AND?: Prisma.CloudSaveScalarWhereWithAggregatesInput | Prisma.CloudSaveScalarWhereWithAggregatesInput[];
    OR?: Prisma.CloudSaveScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CloudSaveScalarWhereWithAggregatesInput | Prisma.CloudSaveScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CloudSave"> | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CloudSave"> | Date | string;
    version?: Prisma.IntWithAggregatesFilter<"CloudSave"> | number;
    payloadJson?: Prisma.JsonWithAggregatesFilter<"CloudSave">;
    userId?: Prisma.StringWithAggregatesFilter<"CloudSave"> | string;
};
export type CloudSaveCreateInput = {
    id?: string;
    updatedAt?: Date | string;
    version?: number;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutCloudSaveInput;
};
export type CloudSaveUncheckedCreateInput = {
    id?: string;
    updatedAt?: Date | string;
    version?: number;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    userId: string;
};
export type CloudSaveUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutCloudSaveNestedInput;
};
export type CloudSaveUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CloudSaveCreateManyInput = {
    id?: string;
    updatedAt?: Date | string;
    version?: number;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    userId: string;
};
export type CloudSaveUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type CloudSaveUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CloudSaveNullableScalarRelationFilter = {
    is?: Prisma.CloudSaveWhereInput | null;
    isNot?: Prisma.CloudSaveWhereInput | null;
};
export type CloudSaveCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    payloadJson?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CloudSaveAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type CloudSaveMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CloudSaveMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CloudSaveSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type CloudSaveCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CloudSaveCreateWithoutUserInput, Prisma.CloudSaveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CloudSaveCreateOrConnectWithoutUserInput;
    connect?: Prisma.CloudSaveWhereUniqueInput;
};
export type CloudSaveUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CloudSaveCreateWithoutUserInput, Prisma.CloudSaveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CloudSaveCreateOrConnectWithoutUserInput;
    connect?: Prisma.CloudSaveWhereUniqueInput;
};
export type CloudSaveUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CloudSaveCreateWithoutUserInput, Prisma.CloudSaveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CloudSaveCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CloudSaveUpsertWithoutUserInput;
    disconnect?: Prisma.CloudSaveWhereInput | boolean;
    delete?: Prisma.CloudSaveWhereInput | boolean;
    connect?: Prisma.CloudSaveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CloudSaveUpdateToOneWithWhereWithoutUserInput, Prisma.CloudSaveUpdateWithoutUserInput>, Prisma.CloudSaveUncheckedUpdateWithoutUserInput>;
};
export type CloudSaveUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CloudSaveCreateWithoutUserInput, Prisma.CloudSaveUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CloudSaveCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CloudSaveUpsertWithoutUserInput;
    disconnect?: Prisma.CloudSaveWhereInput | boolean;
    delete?: Prisma.CloudSaveWhereInput | boolean;
    connect?: Prisma.CloudSaveWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CloudSaveUpdateToOneWithWhereWithoutUserInput, Prisma.CloudSaveUpdateWithoutUserInput>, Prisma.CloudSaveUncheckedUpdateWithoutUserInput>;
};
export type CloudSaveCreateWithoutUserInput = {
    id?: string;
    updatedAt?: Date | string;
    version?: number;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type CloudSaveUncheckedCreateWithoutUserInput = {
    id?: string;
    updatedAt?: Date | string;
    version?: number;
    payloadJson: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type CloudSaveCreateOrConnectWithoutUserInput = {
    where: Prisma.CloudSaveWhereUniqueInput;
    create: Prisma.XOR<Prisma.CloudSaveCreateWithoutUserInput, Prisma.CloudSaveUncheckedCreateWithoutUserInput>;
};
export type CloudSaveUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.CloudSaveUpdateWithoutUserInput, Prisma.CloudSaveUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CloudSaveCreateWithoutUserInput, Prisma.CloudSaveUncheckedCreateWithoutUserInput>;
    where?: Prisma.CloudSaveWhereInput;
};
export type CloudSaveUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.CloudSaveWhereInput;
    data: Prisma.XOR<Prisma.CloudSaveUpdateWithoutUserInput, Prisma.CloudSaveUncheckedUpdateWithoutUserInput>;
};
export type CloudSaveUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type CloudSaveUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    payloadJson?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type CloudSaveSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    updatedAt?: boolean;
    version?: boolean;
    payloadJson?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cloudSave"]>;
export type CloudSaveSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    updatedAt?: boolean;
    version?: boolean;
    payloadJson?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cloudSave"]>;
export type CloudSaveSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    updatedAt?: boolean;
    version?: boolean;
    payloadJson?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cloudSave"]>;
export type CloudSaveSelectScalar = {
    id?: boolean;
    updatedAt?: boolean;
    version?: boolean;
    payloadJson?: boolean;
    userId?: boolean;
};
export type CloudSaveOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "updatedAt" | "version" | "payloadJson" | "userId", ExtArgs["result"]["cloudSave"]>;
export type CloudSaveInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CloudSaveIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CloudSaveIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CloudSavePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CloudSave";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        updatedAt: Date;
        version: number;
        payloadJson: runtime.JsonValue;
        userId: string;
    }, ExtArgs["result"]["cloudSave"]>;
    composites: {};
};
export type CloudSaveGetPayload<S extends boolean | null | undefined | CloudSaveDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CloudSavePayload, S>;
export type CloudSaveCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CloudSaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CloudSaveCountAggregateInputType | true;
};
export interface CloudSaveDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CloudSave'];
        meta: {
            name: 'CloudSave';
        };
    };
    /**
     * Find zero or one CloudSave that matches the filter.
     * @param {CloudSaveFindUniqueArgs} args - Arguments to find a CloudSave
     * @example
     * // Get one CloudSave
     * const cloudSave = await prisma.cloudSave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CloudSaveFindUniqueArgs>(args: Prisma.SelectSubset<T, CloudSaveFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CloudSave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CloudSaveFindUniqueOrThrowArgs} args - Arguments to find a CloudSave
     * @example
     * // Get one CloudSave
     * const cloudSave = await prisma.cloudSave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CloudSaveFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CloudSaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CloudSave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveFindFirstArgs} args - Arguments to find a CloudSave
     * @example
     * // Get one CloudSave
     * const cloudSave = await prisma.cloudSave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CloudSaveFindFirstArgs>(args?: Prisma.SelectSubset<T, CloudSaveFindFirstArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CloudSave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveFindFirstOrThrowArgs} args - Arguments to find a CloudSave
     * @example
     * // Get one CloudSave
     * const cloudSave = await prisma.cloudSave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CloudSaveFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CloudSaveFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CloudSaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CloudSaves
     * const cloudSaves = await prisma.cloudSave.findMany()
     *
     * // Get first 10 CloudSaves
     * const cloudSaves = await prisma.cloudSave.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cloudSaveWithIdOnly = await prisma.cloudSave.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CloudSaveFindManyArgs>(args?: Prisma.SelectSubset<T, CloudSaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CloudSave.
     * @param {CloudSaveCreateArgs} args - Arguments to create a CloudSave.
     * @example
     * // Create one CloudSave
     * const CloudSave = await prisma.cloudSave.create({
     *   data: {
     *     // ... data to create a CloudSave
     *   }
     * })
     *
     */
    create<T extends CloudSaveCreateArgs>(args: Prisma.SelectSubset<T, CloudSaveCreateArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CloudSaves.
     * @param {CloudSaveCreateManyArgs} args - Arguments to create many CloudSaves.
     * @example
     * // Create many CloudSaves
     * const cloudSave = await prisma.cloudSave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CloudSaveCreateManyArgs>(args?: Prisma.SelectSubset<T, CloudSaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CloudSaves and returns the data saved in the database.
     * @param {CloudSaveCreateManyAndReturnArgs} args - Arguments to create many CloudSaves.
     * @example
     * // Create many CloudSaves
     * const cloudSave = await prisma.cloudSave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CloudSaves and only return the `id`
     * const cloudSaveWithIdOnly = await prisma.cloudSave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CloudSaveCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CloudSaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CloudSave.
     * @param {CloudSaveDeleteArgs} args - Arguments to delete one CloudSave.
     * @example
     * // Delete one CloudSave
     * const CloudSave = await prisma.cloudSave.delete({
     *   where: {
     *     // ... filter to delete one CloudSave
     *   }
     * })
     *
     */
    delete<T extends CloudSaveDeleteArgs>(args: Prisma.SelectSubset<T, CloudSaveDeleteArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CloudSave.
     * @param {CloudSaveUpdateArgs} args - Arguments to update one CloudSave.
     * @example
     * // Update one CloudSave
     * const cloudSave = await prisma.cloudSave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CloudSaveUpdateArgs>(args: Prisma.SelectSubset<T, CloudSaveUpdateArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CloudSaves.
     * @param {CloudSaveDeleteManyArgs} args - Arguments to filter CloudSaves to delete.
     * @example
     * // Delete a few CloudSaves
     * const { count } = await prisma.cloudSave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CloudSaveDeleteManyArgs>(args?: Prisma.SelectSubset<T, CloudSaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CloudSaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CloudSaves
     * const cloudSave = await prisma.cloudSave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CloudSaveUpdateManyArgs>(args: Prisma.SelectSubset<T, CloudSaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CloudSaves and returns the data updated in the database.
     * @param {CloudSaveUpdateManyAndReturnArgs} args - Arguments to update many CloudSaves.
     * @example
     * // Update many CloudSaves
     * const cloudSave = await prisma.cloudSave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CloudSaves and only return the `id`
     * const cloudSaveWithIdOnly = await prisma.cloudSave.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CloudSaveUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CloudSaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CloudSave.
     * @param {CloudSaveUpsertArgs} args - Arguments to update or create a CloudSave.
     * @example
     * // Update or create a CloudSave
     * const cloudSave = await prisma.cloudSave.upsert({
     *   create: {
     *     // ... data to create a CloudSave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CloudSave we want to update
     *   }
     * })
     */
    upsert<T extends CloudSaveUpsertArgs>(args: Prisma.SelectSubset<T, CloudSaveUpsertArgs<ExtArgs>>): Prisma.Prisma__CloudSaveClient<runtime.Types.Result.GetResult<Prisma.$CloudSavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CloudSaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveCountArgs} args - Arguments to filter CloudSaves to count.
     * @example
     * // Count the number of CloudSaves
     * const count = await prisma.cloudSave.count({
     *   where: {
     *     // ... the filter for the CloudSaves we want to count
     *   }
     * })
    **/
    count<T extends CloudSaveCountArgs>(args?: Prisma.Subset<T, CloudSaveCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CloudSaveCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CloudSave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CloudSaveAggregateArgs>(args: Prisma.Subset<T, CloudSaveAggregateArgs>): Prisma.PrismaPromise<GetCloudSaveAggregateType<T>>;
    /**
     * Group by CloudSave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CloudSaveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CloudSaveGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CloudSaveGroupByArgs['orderBy'];
    } : {
        orderBy?: CloudSaveGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CloudSaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCloudSaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CloudSave model
     */
    readonly fields: CloudSaveFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CloudSave.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CloudSaveClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CloudSave model
 */
export interface CloudSaveFieldRefs {
    readonly id: Prisma.FieldRef<"CloudSave", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"CloudSave", 'DateTime'>;
    readonly version: Prisma.FieldRef<"CloudSave", 'Int'>;
    readonly payloadJson: Prisma.FieldRef<"CloudSave", 'Json'>;
    readonly userId: Prisma.FieldRef<"CloudSave", 'String'>;
}
/**
 * CloudSave findUnique
 */
export type CloudSaveFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * Filter, which CloudSave to fetch.
     */
    where: Prisma.CloudSaveWhereUniqueInput;
};
/**
 * CloudSave findUniqueOrThrow
 */
export type CloudSaveFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * Filter, which CloudSave to fetch.
     */
    where: Prisma.CloudSaveWhereUniqueInput;
};
/**
 * CloudSave findFirst
 */
export type CloudSaveFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * Filter, which CloudSave to fetch.
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CloudSaves to fetch.
     */
    orderBy?: Prisma.CloudSaveOrderByWithRelationInput | Prisma.CloudSaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CloudSaves.
     */
    cursor?: Prisma.CloudSaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CloudSaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CloudSaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CloudSaves.
     */
    distinct?: Prisma.CloudSaveScalarFieldEnum | Prisma.CloudSaveScalarFieldEnum[];
};
/**
 * CloudSave findFirstOrThrow
 */
export type CloudSaveFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * Filter, which CloudSave to fetch.
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CloudSaves to fetch.
     */
    orderBy?: Prisma.CloudSaveOrderByWithRelationInput | Prisma.CloudSaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CloudSaves.
     */
    cursor?: Prisma.CloudSaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CloudSaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CloudSaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CloudSaves.
     */
    distinct?: Prisma.CloudSaveScalarFieldEnum | Prisma.CloudSaveScalarFieldEnum[];
};
/**
 * CloudSave findMany
 */
export type CloudSaveFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * Filter, which CloudSaves to fetch.
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CloudSaves to fetch.
     */
    orderBy?: Prisma.CloudSaveOrderByWithRelationInput | Prisma.CloudSaveOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CloudSaves.
     */
    cursor?: Prisma.CloudSaveWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CloudSaves from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CloudSaves.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CloudSaves.
     */
    distinct?: Prisma.CloudSaveScalarFieldEnum | Prisma.CloudSaveScalarFieldEnum[];
};
/**
 * CloudSave create
 */
export type CloudSaveCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * The data needed to create a CloudSave.
     */
    data: Prisma.XOR<Prisma.CloudSaveCreateInput, Prisma.CloudSaveUncheckedCreateInput>;
};
/**
 * CloudSave createMany
 */
export type CloudSaveCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CloudSaves.
     */
    data: Prisma.CloudSaveCreateManyInput | Prisma.CloudSaveCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CloudSave createManyAndReturn
 */
export type CloudSaveCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * The data used to create many CloudSaves.
     */
    data: Prisma.CloudSaveCreateManyInput | Prisma.CloudSaveCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CloudSave update
 */
export type CloudSaveUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * The data needed to update a CloudSave.
     */
    data: Prisma.XOR<Prisma.CloudSaveUpdateInput, Prisma.CloudSaveUncheckedUpdateInput>;
    /**
     * Choose, which CloudSave to update.
     */
    where: Prisma.CloudSaveWhereUniqueInput;
};
/**
 * CloudSave updateMany
 */
export type CloudSaveUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CloudSaves.
     */
    data: Prisma.XOR<Prisma.CloudSaveUpdateManyMutationInput, Prisma.CloudSaveUncheckedUpdateManyInput>;
    /**
     * Filter which CloudSaves to update
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * Limit how many CloudSaves to update.
     */
    limit?: number;
};
/**
 * CloudSave updateManyAndReturn
 */
export type CloudSaveUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * The data used to update CloudSaves.
     */
    data: Prisma.XOR<Prisma.CloudSaveUpdateManyMutationInput, Prisma.CloudSaveUncheckedUpdateManyInput>;
    /**
     * Filter which CloudSaves to update
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * Limit how many CloudSaves to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CloudSave upsert
 */
export type CloudSaveUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * The filter to search for the CloudSave to update in case it exists.
     */
    where: Prisma.CloudSaveWhereUniqueInput;
    /**
     * In case the CloudSave found by the `where` argument doesn't exist, create a new CloudSave with this data.
     */
    create: Prisma.XOR<Prisma.CloudSaveCreateInput, Prisma.CloudSaveUncheckedCreateInput>;
    /**
     * In case the CloudSave was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CloudSaveUpdateInput, Prisma.CloudSaveUncheckedUpdateInput>;
};
/**
 * CloudSave delete
 */
export type CloudSaveDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
    /**
     * Filter which CloudSave to delete.
     */
    where: Prisma.CloudSaveWhereUniqueInput;
};
/**
 * CloudSave deleteMany
 */
export type CloudSaveDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CloudSaves to delete
     */
    where?: Prisma.CloudSaveWhereInput;
    /**
     * Limit how many CloudSaves to delete.
     */
    limit?: number;
};
/**
 * CloudSave without action
 */
export type CloudSaveDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CloudSave
     */
    select?: Prisma.CloudSaveSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CloudSave
     */
    omit?: Prisma.CloudSaveOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CloudSaveInclude<ExtArgs> | null;
};
//# sourceMappingURL=CloudSave.d.ts.map