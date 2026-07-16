import request from '@/utils/request'

// 查询测试模块列表
export function listTest(query) {
  return request({
    url: '/system/test/list',
    method: 'get',
    params: query
  })
}

// 查询测试模块详细
export function getTest(id) {
  return request({
    url: '/system/test/' + id,
    method: 'get'
  })
}

// 新增测试模块
export function addTest(data) {
  return request({
    url: '/system/test',
    method: 'post',
    data: data
  })
}

// 修改测试模块
export function updateTest(data) {
  return request({
    url: '/system/test',
    method: 'put',
    data: data
  })
}

// 删除测试模块
export function delTest(id) {
  return request({
    url: '/system/test/' + id,
    method: 'delete'
  })
}
