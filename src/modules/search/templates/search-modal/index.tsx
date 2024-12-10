"use client"

import { InstantSearch } from "react-instantsearch-hooks-web"
import { useRouter } from "next/navigation"
import { MagnifyingGlassMini } from "@medusajs/icons"
import { useEffect, useRef, useCallback } from "react"

import { SEARCH_INDEX_NAME, searchClient } from "@lib/search-client"
import Hit from "@modules/search/components/hit"
import Hits from "@modules/search/components/hits"
import SearchBox from "@modules/search/components/search-box"

export default function SearchModal() {
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  const closeModal = useCallback(() => {
    router.back()
  }, [router])

  // Close modal on outside click
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (event.target === searchRef.current) {
        closeModal()
      }
    },
    [closeModal]
  )

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick)
    return () => {
      window.removeEventListener("click", handleOutsideClick)
    }
  }, [handleOutsideClick])

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [closeModal])

  return (
    <div className="relative z-[75]">
      <div
        className="fixed inset-0 bg-opacity-75 backdrop-blur-md h-screen w-screen"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 px-5 sm:p-0"
        ref={searchRef}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col justify-start w-full h-fit p-5 items-center text-left align-middle transition-all max-h-[75vh] bg-transparent shadow-none">
          <InstantSearch
            indexName={SEARCH_INDEX_NAME}
            searchClient={searchClient}
          >
            <div
              className="flex absolute flex-col h-fit w-full sm:w-fit"
              data-testid="search-modal-container"
            >
              <div className="w-full flex items-center gap-x-2 p-4 bg-[rgba(3,7,18,0.5)] text-ui-fg-on-color backdrop-blur-2xl rounded-rounded">
                <MagnifyingGlassMini />
                <SearchBox />
              </div>
              <div className="flex-1 mt-6">
                <Hits hitComponent={Hit} />
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    </div>
  )
}
