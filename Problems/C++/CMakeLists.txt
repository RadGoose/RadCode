cmake_minimum_required(VERSION 3.23.1)

set(This Example)

project(${This} CXX)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

enable_testing()

add_subdirectory(googletest)

set(Headers
    Example.hpp
)
set(Sources
    Example.cpp
)

add_library(${This} STATIC ${Sources} ${Headers})

add_subdirectory(test)