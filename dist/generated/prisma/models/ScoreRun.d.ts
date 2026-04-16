import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ScoreRun
 *
 */
export type ScoreRunModel = runtime.Types.Result.DefaultSelection<Prisma.$ScoreRunPayload>;
export type AggregateScoreRun = {
    _count: ScoreRunCountAggregateOutputType | null;
    _avg: ScoreRunAvgAggregateOutputType | null;
    _sum: ScoreRunSumAggregateOutputType | null;
    _min: ScoreRunMinAggregateOutputType | null;
    _max: ScoreRunMaxAggregateOutputType | null;
};
export type ScoreRunAvgAggregateOutputType = {
    score: number | null;
};
export type ScoreRunSumAggregateOutputType = {
    score: number | null;
};
export type ScoreRunMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    mode: $Enums.GameMode | null;
    score: number | null;
    userId: string | null;
};
export type ScoreRunMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    mode: $Enums.GameMode | null;
    score: number | null;
    userId: string | null;
};
export type ScoreRunCountAggregateOutputType = {
    id: number;
    createdAt: number;
    mode: number;
    score: number;
    metaJson: number;
    userId: number;
    _all: number;
};
export type ScoreRunAvgAggregateInputType = {
    score?: true;
};
export type ScoreRunSumAggregateInputType = {
    score?: true;
};
export type ScoreRunMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    mode?: true;
    score?: true;
    userId?: true;
};
export type ScoreRunMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    mode?: true;
    score?: true;
    userId?: true;
};
export type ScoreRunCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    mode?: true;
    score?: true;
    metaJson?: true;
    userId?: true;
    _all?: true;
};
export type ScoreRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreRun to aggregate.
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScoreRuns to fetch.
     */
    orderBy?: Prisma.ScoreRunOrderByWithRelationInput | Prisma.ScoreRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ScoreRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScoreRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScoreRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ScoreRuns
    **/
    _count?: true | ScoreRunCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ScoreRunAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ScoreRunSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ScoreRunMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ScoreRunMaxAggregateInputType;
};
export type GetScoreRunAggregateType<T extends ScoreRunAggregateArgs> = {
    [P in keyof T & keyof AggregateScoreRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScoreRun[P]> : Prisma.GetScalarType<T[P], AggregateScoreRun[P]>;
};
export type ScoreRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScoreRunWhereInput;
    orderBy?: Prisma.ScoreRunOrderByWithAggregationInput | Prisma.ScoreRunOrderByWithAggregationInput[];
    by: Prisma.ScoreRunScalarFieldEnum[] | Prisma.ScoreRunScalarFieldEnum;
    having?: Prisma.ScoreRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScoreRunCountAggregateInputType | true;
    _avg?: ScoreRunAvgAggregateInputType;
    _sum?: ScoreRunSumAggregateInputType;
    _min?: ScoreRunMinAggregateInputType;
    _max?: ScoreRunMaxAggregateInputType;
};
export type ScoreRunGroupByOutputType = {
    id: string;
    createdAt: Date;
    mode: $Enums.GameMode;
    score: number;
    metaJson: runtime.JsonValue | null;
    userId: string;
    _count: ScoreRunCountAggregateOutputType | null;
    _avg: ScoreRunAvgAggregateOutputType | null;
    _sum: ScoreRunSumAggregateOutputType | null;
    _min: ScoreRunMinAggregateOutputType | null;
    _max: ScoreRunMaxAggregateOutputType | null;
};
export type GetScoreRunGroupByPayload<T extends ScoreRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScoreRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScoreRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScoreRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScoreRunGroupByOutputType[P]>;
}>>;
export type ScoreRunWhereInput = {
    AND?: Prisma.ScoreRunWhereInput | Prisma.ScoreRunWhereInput[];
    OR?: Prisma.ScoreRunWhereInput[];
    NOT?: Prisma.ScoreRunWhereInput | Prisma.ScoreRunWhereInput[];
    id?: Prisma.StringFilter<"ScoreRun"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScoreRun"> | Date | string;
    mode?: Prisma.EnumGameModeFilter<"ScoreRun"> | $Enums.GameMode;
    score?: Prisma.IntFilter<"ScoreRun"> | number;
    metaJson?: Prisma.JsonNullableFilter<"ScoreRun">;
    userId?: Prisma.StringFilter<"ScoreRun"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ScoreRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    metaJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type ScoreRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScoreRunWhereInput | Prisma.ScoreRunWhereInput[];
    OR?: Prisma.ScoreRunWhereInput[];
    NOT?: Prisma.ScoreRunWhereInput | Prisma.ScoreRunWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"ScoreRun"> | Date | string;
    mode?: Prisma.EnumGameModeFilter<"ScoreRun"> | $Enums.GameMode;
    score?: Prisma.IntFilter<"ScoreRun"> | number;
    metaJson?: Prisma.JsonNullableFilter<"ScoreRun">;
    userId?: Prisma.StringFilter<"ScoreRun"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ScoreRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    metaJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.ScoreRunCountOrderByAggregateInput;
    _avg?: Prisma.ScoreRunAvgOrderByAggregateInput;
    _max?: Prisma.ScoreRunMaxOrderByAggregateInput;
    _min?: Prisma.ScoreRunMinOrderByAggregateInput;
    _sum?: Prisma.ScoreRunSumOrderByAggregateInput;
};
export type ScoreRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScoreRunScalarWhereWithAggregatesInput | Prisma.ScoreRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScoreRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScoreRunScalarWhereWithAggregatesInput | Prisma.ScoreRunScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ScoreRun"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScoreRun"> | Date | string;
    mode?: Prisma.EnumGameModeWithAggregatesFilter<"ScoreRun"> | $Enums.GameMode;
    score?: Prisma.IntWithAggregatesFilter<"ScoreRun"> | number;
    metaJson?: Prisma.JsonNullableWithAggregatesFilter<"ScoreRun">;
    userId?: Prisma.StringWithAggregatesFilter<"ScoreRun"> | string;
};
export type ScoreRunCreateInput = {
    id?: string;
    createdAt?: Date | string;
    mode: $Enums.GameMode;
    score: number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user: Prisma.UserCreateNestedOneWithoutRunsInput;
};
export type ScoreRunUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    mode: $Enums.GameMode;
    score: number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    userId: string;
};
export type ScoreRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    user?: Prisma.UserUpdateOneRequiredWithoutRunsNestedInput;
};
export type ScoreRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScoreRunCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    mode: $Enums.GameMode;
    score: number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    userId: string;
};
export type ScoreRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScoreRunListRelationFilter = {
    every?: Prisma.ScoreRunWhereInput;
    some?: Prisma.ScoreRunWhereInput;
    none?: Prisma.ScoreRunWhereInput;
};
export type ScoreRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScoreRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    metaJson?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ScoreRunAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type ScoreRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ScoreRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ScoreRunSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type ScoreRunCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ScoreRunCreateWithoutUserInput, Prisma.ScoreRunUncheckedCreateWithoutUserInput> | Prisma.ScoreRunCreateWithoutUserInput[] | Prisma.ScoreRunUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScoreRunCreateOrConnectWithoutUserInput | Prisma.ScoreRunCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ScoreRunCreateManyUserInputEnvelope;
    connect?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
};
export type ScoreRunUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ScoreRunCreateWithoutUserInput, Prisma.ScoreRunUncheckedCreateWithoutUserInput> | Prisma.ScoreRunCreateWithoutUserInput[] | Prisma.ScoreRunUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScoreRunCreateOrConnectWithoutUserInput | Prisma.ScoreRunCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ScoreRunCreateManyUserInputEnvelope;
    connect?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
};
export type ScoreRunUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ScoreRunCreateWithoutUserInput, Prisma.ScoreRunUncheckedCreateWithoutUserInput> | Prisma.ScoreRunCreateWithoutUserInput[] | Prisma.ScoreRunUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScoreRunCreateOrConnectWithoutUserInput | Prisma.ScoreRunCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ScoreRunUpsertWithWhereUniqueWithoutUserInput | Prisma.ScoreRunUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ScoreRunCreateManyUserInputEnvelope;
    set?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    disconnect?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    delete?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    connect?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    update?: Prisma.ScoreRunUpdateWithWhereUniqueWithoutUserInput | Prisma.ScoreRunUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ScoreRunUpdateManyWithWhereWithoutUserInput | Prisma.ScoreRunUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ScoreRunScalarWhereInput | Prisma.ScoreRunScalarWhereInput[];
};
export type ScoreRunUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ScoreRunCreateWithoutUserInput, Prisma.ScoreRunUncheckedCreateWithoutUserInput> | Prisma.ScoreRunCreateWithoutUserInput[] | Prisma.ScoreRunUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ScoreRunCreateOrConnectWithoutUserInput | Prisma.ScoreRunCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ScoreRunUpsertWithWhereUniqueWithoutUserInput | Prisma.ScoreRunUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ScoreRunCreateManyUserInputEnvelope;
    set?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    disconnect?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    delete?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    connect?: Prisma.ScoreRunWhereUniqueInput | Prisma.ScoreRunWhereUniqueInput[];
    update?: Prisma.ScoreRunUpdateWithWhereUniqueWithoutUserInput | Prisma.ScoreRunUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ScoreRunUpdateManyWithWhereWithoutUserInput | Prisma.ScoreRunUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ScoreRunScalarWhereInput | Prisma.ScoreRunScalarWhereInput[];
};
export type EnumGameModeFieldUpdateOperationsInput = {
    set?: $Enums.GameMode;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ScoreRunCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    mode: $Enums.GameMode;
    score: number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunUncheckedCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    mode: $Enums.GameMode;
    score: number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunCreateOrConnectWithoutUserInput = {
    where: Prisma.ScoreRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScoreRunCreateWithoutUserInput, Prisma.ScoreRunUncheckedCreateWithoutUserInput>;
};
export type ScoreRunCreateManyUserInputEnvelope = {
    data: Prisma.ScoreRunCreateManyUserInput | Prisma.ScoreRunCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ScoreRunUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ScoreRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScoreRunUpdateWithoutUserInput, Prisma.ScoreRunUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ScoreRunCreateWithoutUserInput, Prisma.ScoreRunUncheckedCreateWithoutUserInput>;
};
export type ScoreRunUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ScoreRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScoreRunUpdateWithoutUserInput, Prisma.ScoreRunUncheckedUpdateWithoutUserInput>;
};
export type ScoreRunUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ScoreRunScalarWhereInput;
    data: Prisma.XOR<Prisma.ScoreRunUpdateManyMutationInput, Prisma.ScoreRunUncheckedUpdateManyWithoutUserInput>;
};
export type ScoreRunScalarWhereInput = {
    AND?: Prisma.ScoreRunScalarWhereInput | Prisma.ScoreRunScalarWhereInput[];
    OR?: Prisma.ScoreRunScalarWhereInput[];
    NOT?: Prisma.ScoreRunScalarWhereInput | Prisma.ScoreRunScalarWhereInput[];
    id?: Prisma.StringFilter<"ScoreRun"> | string;
    createdAt?: Prisma.DateTimeFilter<"ScoreRun"> | Date | string;
    mode?: Prisma.EnumGameModeFilter<"ScoreRun"> | $Enums.GameMode;
    score?: Prisma.IntFilter<"ScoreRun"> | number;
    metaJson?: Prisma.JsonNullableFilter<"ScoreRun">;
    userId?: Prisma.StringFilter<"ScoreRun"> | string;
};
export type ScoreRunCreateManyUserInput = {
    id?: string;
    createdAt?: Date | string;
    mode: $Enums.GameMode;
    score: number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mode?: Prisma.EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    metaJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type ScoreRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    mode?: boolean;
    score?: boolean;
    metaJson?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scoreRun"]>;
export type ScoreRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    mode?: boolean;
    score?: boolean;
    metaJson?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scoreRun"]>;
export type ScoreRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    mode?: boolean;
    score?: boolean;
    metaJson?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scoreRun"]>;
export type ScoreRunSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    mode?: boolean;
    score?: boolean;
    metaJson?: boolean;
    userId?: boolean;
};
export type ScoreRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "mode" | "score" | "metaJson" | "userId", ExtArgs["result"]["scoreRun"]>;
export type ScoreRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ScoreRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ScoreRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ScoreRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScoreRun";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        mode: $Enums.GameMode;
        score: number;
        metaJson: runtime.JsonValue | null;
        userId: string;
    }, ExtArgs["result"]["scoreRun"]>;
    composites: {};
};
export type ScoreRunGetPayload<S extends boolean | null | undefined | ScoreRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload, S>;
export type ScoreRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScoreRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScoreRunCountAggregateInputType | true;
};
export interface ScoreRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScoreRun'];
        meta: {
            name: 'ScoreRun';
        };
    };
    /**
     * Find zero or one ScoreRun that matches the filter.
     * @param {ScoreRunFindUniqueArgs} args - Arguments to find a ScoreRun
     * @example
     * // Get one ScoreRun
     * const scoreRun = await prisma.scoreRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreRunFindUniqueArgs>(args: Prisma.SelectSubset<T, ScoreRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ScoreRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreRunFindUniqueOrThrowArgs} args - Arguments to find a ScoreRun
     * @example
     * // Get one ScoreRun
     * const scoreRun = await prisma.scoreRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScoreRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ScoreRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunFindFirstArgs} args - Arguments to find a ScoreRun
     * @example
     * // Get one ScoreRun
     * const scoreRun = await prisma.scoreRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreRunFindFirstArgs>(args?: Prisma.SelectSubset<T, ScoreRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ScoreRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunFindFirstOrThrowArgs} args - Arguments to find a ScoreRun
     * @example
     * // Get one ScoreRun
     * const scoreRun = await prisma.scoreRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScoreRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ScoreRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreRuns
     * const scoreRuns = await prisma.scoreRun.findMany()
     *
     * // Get first 10 ScoreRuns
     * const scoreRuns = await prisma.scoreRun.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scoreRunWithIdOnly = await prisma.scoreRun.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ScoreRunFindManyArgs>(args?: Prisma.SelectSubset<T, ScoreRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ScoreRun.
     * @param {ScoreRunCreateArgs} args - Arguments to create a ScoreRun.
     * @example
     * // Create one ScoreRun
     * const ScoreRun = await prisma.scoreRun.create({
     *   data: {
     *     // ... data to create a ScoreRun
     *   }
     * })
     *
     */
    create<T extends ScoreRunCreateArgs>(args: Prisma.SelectSubset<T, ScoreRunCreateArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ScoreRuns.
     * @param {ScoreRunCreateManyArgs} args - Arguments to create many ScoreRuns.
     * @example
     * // Create many ScoreRuns
     * const scoreRun = await prisma.scoreRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ScoreRunCreateManyArgs>(args?: Prisma.SelectSubset<T, ScoreRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ScoreRuns and returns the data saved in the database.
     * @param {ScoreRunCreateManyAndReturnArgs} args - Arguments to create many ScoreRuns.
     * @example
     * // Create many ScoreRuns
     * const scoreRun = await prisma.scoreRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ScoreRuns and only return the `id`
     * const scoreRunWithIdOnly = await prisma.scoreRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ScoreRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScoreRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ScoreRun.
     * @param {ScoreRunDeleteArgs} args - Arguments to delete one ScoreRun.
     * @example
     * // Delete one ScoreRun
     * const ScoreRun = await prisma.scoreRun.delete({
     *   where: {
     *     // ... filter to delete one ScoreRun
     *   }
     * })
     *
     */
    delete<T extends ScoreRunDeleteArgs>(args: Prisma.SelectSubset<T, ScoreRunDeleteArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ScoreRun.
     * @param {ScoreRunUpdateArgs} args - Arguments to update one ScoreRun.
     * @example
     * // Update one ScoreRun
     * const scoreRun = await prisma.scoreRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ScoreRunUpdateArgs>(args: Prisma.SelectSubset<T, ScoreRunUpdateArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ScoreRuns.
     * @param {ScoreRunDeleteManyArgs} args - Arguments to filter ScoreRuns to delete.
     * @example
     * // Delete a few ScoreRuns
     * const { count } = await prisma.scoreRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ScoreRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScoreRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ScoreRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreRuns
     * const scoreRun = await prisma.scoreRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ScoreRunUpdateManyArgs>(args: Prisma.SelectSubset<T, ScoreRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ScoreRuns and returns the data updated in the database.
     * @param {ScoreRunUpdateManyAndReturnArgs} args - Arguments to update many ScoreRuns.
     * @example
     * // Update many ScoreRuns
     * const scoreRun = await prisma.scoreRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ScoreRuns and only return the `id`
     * const scoreRunWithIdOnly = await prisma.scoreRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScoreRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ScoreRun.
     * @param {ScoreRunUpsertArgs} args - Arguments to update or create a ScoreRun.
     * @example
     * // Update or create a ScoreRun
     * const scoreRun = await prisma.scoreRun.upsert({
     *   create: {
     *     // ... data to create a ScoreRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreRun we want to update
     *   }
     * })
     */
    upsert<T extends ScoreRunUpsertArgs>(args: Prisma.SelectSubset<T, ScoreRunUpsertArgs<ExtArgs>>): Prisma.Prisma__ScoreRunClient<runtime.Types.Result.GetResult<Prisma.$ScoreRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ScoreRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunCountArgs} args - Arguments to filter ScoreRuns to count.
     * @example
     * // Count the number of ScoreRuns
     * const count = await prisma.scoreRun.count({
     *   where: {
     *     // ... the filter for the ScoreRuns we want to count
     *   }
     * })
    **/
    count<T extends ScoreRunCountArgs>(args?: Prisma.Subset<T, ScoreRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScoreRunCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ScoreRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreRunAggregateArgs>(args: Prisma.Subset<T, ScoreRunAggregateArgs>): Prisma.PrismaPromise<GetScoreRunAggregateType<T>>;
    /**
     * Group by ScoreRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreRunGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ScoreRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScoreRunGroupByArgs['orderBy'];
    } : {
        orderBy?: ScoreRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScoreRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ScoreRun model
     */
    readonly fields: ScoreRunFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ScoreRun.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ScoreRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ScoreRun model
 */
export interface ScoreRunFieldRefs {
    readonly id: Prisma.FieldRef<"ScoreRun", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ScoreRun", 'DateTime'>;
    readonly mode: Prisma.FieldRef<"ScoreRun", 'GameMode'>;
    readonly score: Prisma.FieldRef<"ScoreRun", 'Int'>;
    readonly metaJson: Prisma.FieldRef<"ScoreRun", 'Json'>;
    readonly userId: Prisma.FieldRef<"ScoreRun", 'String'>;
}
/**
 * ScoreRun findUnique
 */
export type ScoreRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * Filter, which ScoreRun to fetch.
     */
    where: Prisma.ScoreRunWhereUniqueInput;
};
/**
 * ScoreRun findUniqueOrThrow
 */
export type ScoreRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * Filter, which ScoreRun to fetch.
     */
    where: Prisma.ScoreRunWhereUniqueInput;
};
/**
 * ScoreRun findFirst
 */
export type ScoreRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * Filter, which ScoreRun to fetch.
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScoreRuns to fetch.
     */
    orderBy?: Prisma.ScoreRunOrderByWithRelationInput | Prisma.ScoreRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ScoreRuns.
     */
    cursor?: Prisma.ScoreRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScoreRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScoreRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ScoreRuns.
     */
    distinct?: Prisma.ScoreRunScalarFieldEnum | Prisma.ScoreRunScalarFieldEnum[];
};
/**
 * ScoreRun findFirstOrThrow
 */
export type ScoreRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * Filter, which ScoreRun to fetch.
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScoreRuns to fetch.
     */
    orderBy?: Prisma.ScoreRunOrderByWithRelationInput | Prisma.ScoreRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ScoreRuns.
     */
    cursor?: Prisma.ScoreRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScoreRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScoreRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ScoreRuns.
     */
    distinct?: Prisma.ScoreRunScalarFieldEnum | Prisma.ScoreRunScalarFieldEnum[];
};
/**
 * ScoreRun findMany
 */
export type ScoreRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * Filter, which ScoreRuns to fetch.
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ScoreRuns to fetch.
     */
    orderBy?: Prisma.ScoreRunOrderByWithRelationInput | Prisma.ScoreRunOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ScoreRuns.
     */
    cursor?: Prisma.ScoreRunWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ScoreRuns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ScoreRuns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ScoreRuns.
     */
    distinct?: Prisma.ScoreRunScalarFieldEnum | Prisma.ScoreRunScalarFieldEnum[];
};
/**
 * ScoreRun create
 */
export type ScoreRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * The data needed to create a ScoreRun.
     */
    data: Prisma.XOR<Prisma.ScoreRunCreateInput, Prisma.ScoreRunUncheckedCreateInput>;
};
/**
 * ScoreRun createMany
 */
export type ScoreRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreRuns.
     */
    data: Prisma.ScoreRunCreateManyInput | Prisma.ScoreRunCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ScoreRun createManyAndReturn
 */
export type ScoreRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * The data used to create many ScoreRuns.
     */
    data: Prisma.ScoreRunCreateManyInput | Prisma.ScoreRunCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ScoreRun update
 */
export type ScoreRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * The data needed to update a ScoreRun.
     */
    data: Prisma.XOR<Prisma.ScoreRunUpdateInput, Prisma.ScoreRunUncheckedUpdateInput>;
    /**
     * Choose, which ScoreRun to update.
     */
    where: Prisma.ScoreRunWhereUniqueInput;
};
/**
 * ScoreRun updateMany
 */
export type ScoreRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreRuns.
     */
    data: Prisma.XOR<Prisma.ScoreRunUpdateManyMutationInput, Prisma.ScoreRunUncheckedUpdateManyInput>;
    /**
     * Filter which ScoreRuns to update
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * Limit how many ScoreRuns to update.
     */
    limit?: number;
};
/**
 * ScoreRun updateManyAndReturn
 */
export type ScoreRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * The data used to update ScoreRuns.
     */
    data: Prisma.XOR<Prisma.ScoreRunUpdateManyMutationInput, Prisma.ScoreRunUncheckedUpdateManyInput>;
    /**
     * Filter which ScoreRuns to update
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * Limit how many ScoreRuns to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ScoreRun upsert
 */
export type ScoreRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * The filter to search for the ScoreRun to update in case it exists.
     */
    where: Prisma.ScoreRunWhereUniqueInput;
    /**
     * In case the ScoreRun found by the `where` argument doesn't exist, create a new ScoreRun with this data.
     */
    create: Prisma.XOR<Prisma.ScoreRunCreateInput, Prisma.ScoreRunUncheckedCreateInput>;
    /**
     * In case the ScoreRun was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ScoreRunUpdateInput, Prisma.ScoreRunUncheckedUpdateInput>;
};
/**
 * ScoreRun delete
 */
export type ScoreRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
    /**
     * Filter which ScoreRun to delete.
     */
    where: Prisma.ScoreRunWhereUniqueInput;
};
/**
 * ScoreRun deleteMany
 */
export type ScoreRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreRuns to delete
     */
    where?: Prisma.ScoreRunWhereInput;
    /**
     * Limit how many ScoreRuns to delete.
     */
    limit?: number;
};
/**
 * ScoreRun without action
 */
export type ScoreRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreRun
     */
    select?: Prisma.ScoreRunSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ScoreRun
     */
    omit?: Prisma.ScoreRunOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScoreRunInclude<ExtArgs> | null;
};
//# sourceMappingURL=ScoreRun.d.ts.map