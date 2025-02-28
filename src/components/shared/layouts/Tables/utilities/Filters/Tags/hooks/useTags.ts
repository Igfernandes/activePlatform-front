import { useTableContext } from "@components/shared/layouts/Tables/contexts/Table";
import { TagProps } from "../type";
import { useEffect, useRef, useState } from "react";
import { TableDataShape } from "@components/shared/layouts/Seletor/contexts/types";

type Props<TableData> = TagProps<TableData>;

type TagsShape = {
  text: string;
  amount: number;
};

/**
 * Custom hook for managing tag-based filtering in a table.
 *
 * @template TableData - The structure of the table data.
 * @param {Props<TableData>} props - The props containing column name and table data.
 * @returns {Object} - An object containing tags, totalTags, and filter functions.
 */
export function useTags<TableData extends Array<Record<string, unknown>>>({
  column,
  data,
}: Props<TableData>) {
  const [tags, setTags] = useState<TagsShape[]>([]);
  const { handleChangeFilters, handleChangeEvent } = useTableContext();
  const totalTags = useRef<number>(0);

  /**
   * Generates a list of unique tags based on the provided column.
   */
  const getListTags = () => {
    const tagsCount: Record<string, number> = {};

    data.forEach((entity) => {
      const propName = entity[column] as string;
      if (!propName) return;

      tagsCount[propName] = (tagsCount[propName] || 0) + 1;
    });

    setTags(
      Object.entries(tagsCount).map(([text, amount]) => ({ text, amount }))
    );
  };

  /**
   * Filters table data based on a given tag.
   *
   * @param {TableDataShape} data - The table data to filter.
   * @param {string} tag - The tag to filter by.
   * @returns {TableDataShape} - The filtered table data.
   */
  const handleFilterByTag = (
    data: TableDataShape,
    tag: string
  ): TableDataShape => {
    if (!tag) return data;
    return data.filter((entity) => Object.values(entity).includes(tag));
  };

  /**
   * Updates the table filters based on the selected tag.
   *
   * @param {string} tag - The selected tag.
   */
  const handleChangeTargetTag = (tag: string) => {
    handleChangeFilters({
      tags: (data: TableDataShape) => handleFilterByTag(data, tag),
    });
    handleChangeEvent(true);
  };

  useEffect(() => {
    getListTags();
  }, [data]);

  useEffect(() => {
    totalTags.current = tags.reduce((sum, tag) => sum + tag.amount, 0);
  }, [tags]);

  return {
    tags,
    totalTags,
    handleFilterByTag,
    handleChangeTargetTag,
  };
}
